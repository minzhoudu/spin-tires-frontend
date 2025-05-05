import Image from "next/image";

export const Banner = () => {
    return (
        <div className="relative flex h-[70vh] items-center justify-center md:h-[90vh]">
            <Image
                src="/images/tires-banner.jpg"
                alt="Tires banner"
                width={1920}
                height={1080}
                draggable={false}
                className="h-full w-full object-cover"
                priority
            />

            <div className="bg-accent/60 absolute bottom-30 w-full">
                <h1 className="px-5 py-2 text-center text-4xl font-bold tracking-wide">
                    SPINTIRES
                </h1>
            </div>

            <div className="absolute top-0 right-0 bottom-0 left-0 z-10 bg-black/30" />
        </div>
    );
};
