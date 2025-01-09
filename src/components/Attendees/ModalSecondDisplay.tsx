import LabelAndInput from "../LabelAndInput";
import ModalBtn from "../ModalBtn";

interface ModalSecondDisplayProps {
  ticketFormDisplay: number;
  onTicketSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  name: string;
  email: string;
  onChangeName: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onChangeEmail: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  nameMessage: string;
  emailMessage: string;
}

export default function ModalSecondDisplay({
  ticketFormDisplay,
  onTicketSubmit,
  name,
  email,
  onChangeName,
  onChangeEmail,
  nameMessage,
  emailMessage,
}: ModalSecondDisplayProps) {
  return (
    <>
      {ticketFormDisplay === 2 && (
        <div className="">
          <p className=" font-medium text-2xl">
            TOTAL: <span className="font-bold ms-2"> $1000</span>
          </p>

          <form onSubmit={(e) => onTicketSubmit(e)} className="mt-12">
            <LabelAndInput
              label="Name"
              type="text"
              name="name"
              value={name}
              onChange={onChangeName}
              placeholder="Enter name"
              error={nameMessage}
            />

            <LabelAndInput
              label="Email address"
              type="email"
              name="email"
              value={email}
              onChange={onChangeEmail}
              placeholder="Enter email"
              error={emailMessage}
            />

            <p className="mt-10 text-neutral300">
              NOTE: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              enim molestias dignissimos obcaecati sequi magni consequatur
              pariatur modi in,.
            </p>

            <ModalBtn type="submit" className="mt-20">
              Buy now
            </ModalBtn>
          </form>
        </div>
      )}
    </>
  );
}
