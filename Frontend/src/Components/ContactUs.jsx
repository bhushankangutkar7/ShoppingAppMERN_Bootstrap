import React from "react";
import { NavLink } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <div className="container contactUsContainer">
        <h4>
          <strong>Contact Us</strong>
        </h4>
        Thank you for visiting Shop All! We're here to help with any questions,
        concerns, or feedback you may have. Please don't hesitate to reach out
        to us.
        <hr />
        <h4>
          <strong>Customer Support</strong>
        </h4>
        If you need assistance with your order, shipping, product inquiries, or
        have any other questions, our customer service team is ready to assist
        you. <br />
        <strong>Email:</strong> support@shopall.com <br />
        <strong>Phone:</strong> 1-800-123-4567 (Available Mon-Fri, 9 AM - 6 PM){" "}
        <br />
        <strong>Live Chat:</strong> Click here to chat with us (Available 24/7)
        <br />
        <strong>Address:</strong> <br />
        Shop All Customer Service
        <br />
        123 Main Street, Suite 456
        <br />
        City, State, ZIP
        <br />
        <hr />
        <h4>
          <strong>Order Inquiries</strong>
        </h4>{" "}
        For issues related to an existing order, please include your Order
        Number and any relevant details in your email or chat message. This will
        help us assist you faster.
        <hr />
        <h4>
          <strong>Returns and Exchanges</strong>
        </h4>{" "}
        If you need to return or exchange an item, please visit our Returns &
        Exchanges page for more information.
        <hr />
        <h4>
          <strong>Feedback & Suggestions</strong>
        </h4>{" "}
        We'd love to hear your thoughts! If you have suggestions for improvement
        or any feedback on your shopping experience, please feel free to share
        it with us.
        <hr />
        <h4 id="connectUs">
          <strong>Connect Us</strong>
        </h4>{" "}
        Stay connected and updated with the latest products and offers:
        <ul>
          <li>
            <strong>Facebook:</strong> <NavLink to={"#"}>@ShopAll</NavLink>
          </li>
          <li>
            <strong>Instagram:</strong> <NavLink to={"#"}>@ShopAll</NavLink>
          </li>
          <li>
            <strong>Twitter:</strong> <NavLink to={"#"}>@ShopAll</NavLink>
          </li>
          <li>
            <strong>Pinterest:</strong> <NavLink to={"#"}>@ShopAll</NavLink>
          </li>
        </ul>
        <hr />
        We appreciate you choosing Shop All and look forward to serving you!
        <br />
        <br />
      </div>
    </>
  );
};

export default ContactUs;
