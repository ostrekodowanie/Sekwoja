import ContactPhoneIcon from "@/assets/icons/contact-phone";
import LocationIcon from "@/assets/icons/location";
import MailIcon from "@/assets/icons/mail";
import Button from "../ui/button";
import MessagesIcon from "@/assets/icons/messages";
import Input from "../ui/input";
import Image from "next/image";
import { contactMan } from "@/assets/images";

export default function Contact() {
  return (
    <section className="py-[2in] sm:px-[8vw] md:px-[12vw] 2xl:pl-[16vw] lg:pr-0 flex flex-col gap-8 xl:gap-16 xl:items-center xl:grid grid-cols-[1fr_2fr] overflow-hidden">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm text-secondary">
          Zrealizuj marzenia o idealnym wnętrzu
        </h3>
        <h2 className="text-2xl xl:text-3xl mb-4 select-none">
          Zrealizuj marzenia o idealnym wnętrzu z nami
        </h2>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <LocationIcon />
            <span className="text-lg">ul. Przemysłowa 139-200 Dębica</span>
          </div>
          <div className="flex items-center gap-2">
            <ContactPhoneIcon />
            <span className="text-lg">+48 14 681 18 89</span>
          </div>
          <div className="flex items-center gap-2">
            <MailIcon />
            <span className="text-lg">biuro@sekwoja.com</span>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F3E5] h-[3.4in] relative rounded-l-xl flex items-center px-12 gap-12">
        <div className="bg-white rounded-xl shadow-[0px_20px_40px_rgba(17,27,22,0.08)] py-10 px-8 flex flex-col gap-4 w-max xl:max-w-max min-h-[120%]">
          <h3 className="text-[22px] mb-4">
            Wypełnij formularz, odezwiemy się!
          </h3>
          <form
            className="flex flex-col gap-x-4 gap-y-6 sm:grid grid-cols-2 min-w-max"
            action=""
          >
            <Input required name="Imię" />
            <Input required name="Nazwisko" />
            <Input required name="Email" />
            <Input required name="Telefon" />
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
            <Button className="w-max mt-4">
              <MessagesIcon /> Wyślij wiadomość
            </Button>
          </form>
        </div>
        <Image className="self-end" src={contactMan} alt="Employer" />
      </div>
    </section>
  );
}
