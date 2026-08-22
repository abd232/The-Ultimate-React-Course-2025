import "./App.css";
import React from "react";

import Item from "./components/Item";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <Item
          key={index}
          title={faq.title}
          index={index}
          isActive={activeIndex === index}
          onSetActiveIndex={setActiveIndex}
        >
          {faq.text}
        </Item>
      ))}
      <Item
        key={4}
        title={"Hello World"}
        index={4}
        isActive={activeIndex === 4}
        onSetActiveIndex={setActiveIndex}
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </Item>
    </div>
  );
}
