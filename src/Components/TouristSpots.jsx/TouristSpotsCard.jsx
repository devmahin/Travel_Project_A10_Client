import { Link } from "react-router-dom";

function TouristSpotsCard({ cardData }) {
  const { _id, short_description, image, country_Name } = cardData;
  // console.log(cardData);
  return (
    <div className="block overflow-hidden relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <a href="#!">
        <div className="relative">
          <img
            className="rounded-t-lg h-[260px] w-full object-cover"
            src={image}
            alt=""
          />
          <h1 className="absolute bottom-3 text-3xl prompt-semibold left-5 text-white">
            {country_Name}
          </h1>
        </div>
      </a>
      <div className="p-6">
        <p className="mb-14 text-gray-500 text-neutral-600  dark:text-neutral-200">
          {short_description && short_description.slice(0, 100) + "...."}
        </p>

        <div className="absolute bottom-5">
          <Link
            to={`/alltouristsspot/${_id}`}
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TouristSpotsCard;
