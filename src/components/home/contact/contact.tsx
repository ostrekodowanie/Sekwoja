import ContactPhoneIcon from "@/assets/icons/contact-phone";
import LocationIcon from "@/assets/icons/location";
import MailIcon from "@/assets/icons/mail";
import Button from "../../ui/button";
import MessagesIcon from "@/assets/icons/messages";
import Input from "../../ui/input";
import Image from "next/image";
import { contactMan } from "@/assets/images";
import nodemailer from "nodemailer";
import SubmitButton from "./submit-button";

export default function Contact() {
  async function sendMail(data: FormData) {
    "use server";
    const firstName = data.get("first-name")?.toString();
    const lastName = data.get("last-name")?.toString();
    const email = data.get("email")?.toString();
    const phone = data.get("phone")?.toString();
    const message = data.get("message")?.toString();
    const user = process.env.NEXT_PUBLIC_EMAIL;
    const pass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    console.log({ user, pass });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });
    try {
      await transporter.sendMail({
        from: user,
        to: user,
        subject: `Nowe zatwierdzenie formularza ${new Date().toLocaleDateString()} - Sekwoja`,
        text: `
            Imię: ${firstName}
            Nazwisko: ${lastName}
            Numer telefonu: ${phone}
            Email: ${email}
            Message: ${message}
        `,
      });
    } catch (err) {
      console.log({ err });
    }
  }

  return (
    <section className="py-[0.8in] lg:py-[2in] sm:px-[8vw] md:px-[12vw] 2xl:pl-[16vw] lg:pr-0 flex flex-col gap-8 xl:gap-16 xl:items-center xl:grid grid-cols-[1fr_2fr] overflow-hidden">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm text-secondary font-medium">
          Zrealizuj marzenia o idealnym wnętrzu
        </h3>
        <h2 className="font-medium text-2xl xl:text-3xl mb-4 select-none">
          Zrealizuj marzenia o idealnym wnętrzu z nami
        </h2>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <LocationIcon />
            <span className="text-lg font-medium">
              ul. Przemysłowa 139-200 Dębica
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ContactPhoneIcon />
            <span className="text-lg font-medium">+48 14 681 18 89</span>
          </div>
          <div className="flex items-center gap-2">
            <MailIcon />
            <span className="text-lg font-medium">biuro@sekwoja.com</span>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F3E5] h-[3.4in] relative rounded-l-xl flex items-center px-12 gap-12">
        <div className="bg-white rounded-xl shadow-[0px_20px_40px_rgba(17,27,22,0.08)] py-10 px-8 flex flex-col gap-4 w-max xl:max-w-max min-h-[120%]">
          <h3 className="text-[22px] mb-4 font-medium">
            Wypełnij formularz, odezwiemy się!
          </h3>
          <form
            className="flex flex-col gap-x-4 gap-y-6 sm:grid grid-cols-2 min-w-max"
            action={sendMail}
          >
            <Input required name="first-name" label="Imię" />
            <Input required name="last-name" label="Nazwisko" />
            <Input required name="email" label="Email" />
            <Input required name="phone" label="Telefon" />
            <div className="relative col-span-2">
              <label
                className="text-[#BABABA] text-[12px] absolute left-3.5 top-0 -translate-y-[50%] bg-white px-1"
                htmlFor="message"
              >
                Wiadomość (opcjonalnie)
              </label>
              <textarea
                className="rounded-md border-[1px] border-[#E2E2E2] px-4 py-3 !outline-none text-sm w-full"
                id="message"
                name="message"
              />
            </div>
            <SubmitButton />
          </form>
        </div>
        <Image className="self-end" src={contactMan} alt="Employer" />
      </div>
    </section>
  );
}
