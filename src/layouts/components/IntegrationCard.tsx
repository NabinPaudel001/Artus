import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";

const IntegrationCard = ({
  image,
  style = "rounded-xl",
  name,
}: {
  image: string;
  style?: string;
  name?: string;
}) => {
  return (
    <div
      className={`w-[130px] border border-white/5 bg-dark py-6 ${(style && style) || ""} md:w-[260px]`}
    >
      <ImageFallback
        src={image}
        className="mx-auto h-auto w-14 md:w-16"
        alt={name || "brand image"}
        width={260}
        height={100}
      />
      {name && (
        <h3
          className="tracking-none mt-6 text-center text-base font-medium md:text-lg/none"
          dangerouslySetInnerHTML={markdownify(name)}
        />
      )}
    </div>
  );
};

export default IntegrationCard;
