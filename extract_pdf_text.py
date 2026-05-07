import pypdf
import os

def main():
    reader = pypdf.PdfReader("mo-1.pdf")
    os.makedirs("extracted_images", exist_ok=True)
    print(f"Total pages: {len(reader.pages)}")
    
    image_count = 0
    for i, page in enumerate(reader.pages):
        print(f"Page {i+1} has {len(page.images)} images")
        for count, image_file_object in enumerate(page.images):
            image_count += 1
            filename = f"extracted_images/page_{i+1}_img_{count+1}_{image_file_object.name}"
            # Ensure name has extension or append one
            if not os.path.splitext(filename)[1]:
                filename += ".png"
            with open(filename, "wb") as fp:
                fp.write(image_file_object.data)
            print(f"  Saved {filename}")
            
    print(f"Total extracted images: {image_count}")

if __name__ == "__main__":
    main()
