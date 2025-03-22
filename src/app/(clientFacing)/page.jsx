import Form from "../components/Form";
import Feedbacks from "../components/Feedbacks";
import Hashtags from "../components/Hashtags";

const Feedback = () => {
  return (
    <div
      className="flex w-150 h-200 
        rounded-2xl
        justify-between items-start gap-4
        "
    >
      <section className="flex flex-col w-full">
        <Form />
        <Feedbacks />
      </section>
      <Hashtags />
    </div>
  );
};

export default Feedback;
