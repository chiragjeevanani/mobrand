import React from 'react';
import { Truck, MapPin, Calendar, Clock, HelpCircle, Package, ShieldCheck, AlertCircle } from 'lucide-react';
import PolicyPageLayout from '../web-components/PolicyPageLayout';

const ShippingDeliveryPolicy = () => {
  const seoKeywords = [
    "Shipping policy for e-commerce platform",
    "Delivery policy for online ordering platform",
    "Multi-business delivery system",
    "Vendor delivery management",
    "Grocery and restaurant delivery platform",
    "SaaS commerce shipping policy",
    "Online business delivery terms India"
  ];

  const sections = [
    {
      id: "platform-nature",
      title: "Nature of Platform",
      icon: <HelpCircle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            Mobrand operates as a technology SaaS platform enabling local merchants and service providers to list, manage, and receive online commerce orders.
          </p>
          <p>
            Delivery and shipping arrangements, responsibilities, and timelines vary based on the specific merchant, business type, and logistics configuration selected by the merchant.
          </p>
        </div>
      )
    },
    {
      id: "delivery-responsibility",
      title: "Delivery Responsibility",
      icon: <Truck className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Orders placed on the platform are fulfilled through three primary fulfillment pathways:</p>
          <ul className="space-y-2.5 text-sm list-none pl-1">
            <li className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
              📦 <strong>Vendor-Managed Delivery:</strong> The merchant utilizes their own in-house delivery personnel to fulfill local orders.
            </li>
            <li className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
              🚲 <strong>Third-Party Logistics (3PL):</strong> Orders are handed over to third-party shipping networks (e.g., local delivery APIs) integrated into the vendor storefront.
            </li>
            <li className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
              🏪 <strong>Self-Pickup / Takeaway:</strong> The customer places an order online and collects it directly from the vendor's physical store location.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "delivery-timeline",
      title: "Estimated Delivery Time",
      icon: <Clock className="w-5 h-5" />,
      content: (
        <p>
          Estimated delivery timelines are calculated and displayed dynamically based on distance, vendor preparation speed, traffic congestion, and local weather patterns. Please note that all delivery estimates shown are approximate. The fulfilling vendor remains responsible for maintaining the accuracy of active delivery zones and timings.
        </p>
      )
    },
    {
      id: "shipping-charges",
      title: "Shipping Charges",
      icon: <MapPin className="w-5 h-5" />,
      content: (
        <p>
          Shipping, handling, and delivery convenience fees are configured independently by each registered vendor. These fees may be flat rates, distance-based calculations, or waived entirely based on minimum order values or promotional coupons. All shipping costs are clearly detailed at checkout.
        </p>
      )
    },
    {
      id: "order-tracking",
      title: "Order Tracking",
      icon: <Package className="w-5 h-5" />,
      content: (
        <p>
          Depending on the vendor's operational capabilities, customers may track their orders through real-time in-app delivery map interfaces, automated SMS updates, browser tracking URLs, or WhatsApp alerts. Available tracking methods will be outlined in the customer's order receipt.
        </p>
      )
    },
    {
      id: "delayed-deliveries",
      title: "Delayed or Failed Deliveries",
      icon: <AlertCircle className="w-5 h-5" />,
      content: (
        <p>
          Delays may occasionally occur due to peak order rushes, traffic congestion, grid failures, regulatory blockades, natural disasters, or other conditions beyond direct control. Mobrand and its associated vendors work diligently to resolve delivery bottlenecks. Mobrand is not liable for indirect losses caused by delivery delays.
        </p>
      )
    },
    {
      id: "incorrect-details",
      title: "Incorrect Address or Contact Details",
      icon: <MapPin className="w-5 h-5" />,
      content: (
        <p>
          Customers are solely responsible for inputting a precise delivery address, active phone number, and instructions at checkout. Neither the vendor nor Mobrand shall be responsible for order cancellations, delivery failures, or delayed shipments caused by inaccurate delivery coordinates or unresponsive customer contacts.
        </p>
      )
    },
    {
      id: "order-acceptance",
      title: "Order Acceptance & Cancellation",
      icon: <ShieldCheck className="w-5 h-5" />,
      content: (
        <p>
          Vendors reserve the absolute right to accept, flag, or reject any incoming order based on stock levels, kitchen capacity, geographic constraints, or courier availability. In case of cancellation, the customer is notified and refund procedures are initiated where applicable.
        </p>
      )
    },
    {
      id: "damaged-products",
      title: "Damaged or Missing Products",
      icon: <Package className="w-5 h-5" />,
      content: (
        <p>
          If a delivery contains damaged, incorrect, or missing products, the customer must contact the vendor directly or reach out to Mobrand's customer care portal within a reasonable duration of receiving the order. Satisfactory resolution or refund procedures depend on individual merchant policies and verification processes.
        </p>
      )
    }
  ];

  return (
    <PolicyPageLayout
      title="Shipping & Delivery Policy"
      subtitle="How shipment, delivery logistics, and local order fulfillments operate on Mobrand"
      effectiveDate="May 8, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
    />
  );
};

export default ShippingDeliveryPolicy;
