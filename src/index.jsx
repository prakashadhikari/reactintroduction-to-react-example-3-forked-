import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const Notification = (props) =>
  props.mark > 60 && (
    <p>
      {props.name} has passed the test with {props.mark}pts.
    </p>
  );

const App = () => (
  <>
    <Notification mark={96} name="Benjamin" />
    <Notification mark={23} name="Emily" />
    <Notification mark={80} name="Liam" />
    <Notification mark={72} name="Sophia" />
  </>
);

root.render(<App />);
