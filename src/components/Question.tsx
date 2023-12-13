import { IoCloseSharp } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
interface QuestionProps {
  question: {
    title: string;
    answer: string | string[];
    toggle: boolean;
  };
  toggleQuestion: (title: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, toggleQuestion }) => {
  return (
    <li className="mb-2">
      <button
        className="flex w-full bg-[rgb(35,35,35,35)] p-6 text-left hover:bg-[rgb(65,65,65)] "
        onClick={() => toggleQuestion(question?.title)}
      >
        <span className="flex-1">{question?.title}</span>
        {question?.toggle ? (
          <IoCloseSharp className="w-[30px]" />
        ) : (
          <GoPlus className="w-[30px]" />
        )}
      </button>

      <div
        className={`mt-[0.1rem] overflow-hidden bg-[rgb(35,35,35,35)] text-left  ${
          question?.toggle ? "max-h-96" : "max-h-0"
        } transition-all duration-500`}
      >
        {Array.isArray(question?.answer) ? (
          <div className="p-4">
            {question?.answer.map((item, index) => (
              <p
                className={`${
                  index !== question.answer.length - 1 ? "" : "pt-4"
                }`}
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        ) : (
          <p className="p-4">{question?.answer}</p>
        )}
      </div>
    </li>
  );
};

export default Question;
