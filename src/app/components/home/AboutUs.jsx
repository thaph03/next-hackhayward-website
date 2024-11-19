import Image from 'next/image';

// Images
const mars = '/assets/imgs/Background/Mars.webp';
const scene2 = '/assets/imgs/Scene2/s2Full.webp';
const scene3 = '/assets/imgs/Scene3/s3Full.webp';
const jupiter = '/assets/imgs/Background/Jupiter.webp';

export default function AboutUs() {
    return (
        <>
            <div className="grid place-content-center gap-3 relative shadow-text-sm">
                <section className="grid xl:grid-cols-2 items-center justify-items-center gap-4 text-white max-w-7xl">
                    <article className="animate-fade-right max-w-xl z-20">
                        <h2 className="text-5xl font-bold font-exo2">
                            About Us
                        </h2>
                        <p className="lg:text-xl sm:text-lg max-w-xl font-grotesk mt-4">
                            HackHayward, hosted at California State University,
                            East Bay, is the first collegiate hackathon in the
                            Hayward, California area. We challenge students to
                            work collaboratively within a limited timeframe to
                            ideate, create, and pitch their solutions to tackle
                            real-world issues within a 24-hour timeframe. Our
                            hackathon will be hosted in person at California
                            State University, East Bay during Spring 2025, and
                            we are expecting over 200 participants.
                        </p>
                    </article>
                    <div className="z-20">
                        <Image
                            src={scene2}
                            alt="The cartoon space falcon being escorted by green owl-like aliens through the hallway after being kidnapped"
                            className="rounded-md shadow-lg shadow-cyan-500/50"
                            width={500}
                            height={300}
                            loading="lazy"
                        />
                    </div>
                    <div className="opacity-50 absolute top-[10%] right-[-5%] h-[10%] w-[10%]">
                        <Image
                            src={mars}
                            alt="Mars"
                            className="object-cover"
                            width={150}
                            height={150}
                            loading="lazy"
                        />
                    </div>
                </section>

                <section className="grid xl:grid-cols-2 items-center gap-4 text-white mt-4 justify-items-center max-w-7xl">
                    <div className="z-20">
                        <Image
                            src={scene3}
                            alt="The cartoon space falcon sitting on the spaceship, watching the yellow robot navigate the spacecraft"
                            className="rounded-md shadow-lg shadow-cyan-500/50"
                            width={500}
                            height={300}
                            loading="lazy"
                        />
                    </div>
                    <article className="animate-fade-left row-start-1 row-end-2 xl:col-start-2 xl:col-end-3 max-w-xl z-20">
                        <h2 className="text-5xl font-bold font-exo2">
                            Our Mission
                        </h2>
                        <p className="lg:text-xl sm:text-lg font-grotesk mt-4">
                            Our mission is to empower underrepresented students
                            passionate about technology by providing hands-on
                            learning experiences, networking opportunities, and
                            innovative project development through hackathons.
                            We aim to pave the way for their success in the
                            evolving technological landscape by offering
                            comprehensive skill development and professional
                            connections.
                        </p>
                    </article>
                    <div className="opacity-50 absolute bottom-[45%] left-[-15%] max-h-[30%] max-w-[30%] z-10">
                        <Image
                            src={jupiter}
                            alt="Jupiter"
                            className="object-cover"
                            width={150}
                            height={150}
                            loading="lazy"
                        />
                    </div>
                </section>
            </div>
        </>
    );
}