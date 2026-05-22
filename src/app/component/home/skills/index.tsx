"use client";

const rolesData = [
    {
        id: 1,
        title: "User Experience (UX)",
        description:
            "I design intuitive and enjoyable experiences by understanding user needs, conducting research, and creating wireframes and prototypes that enhance usability.",
    },
    {
        id: 2,
        title: "User Interface (UI)",
        description:
            "I craft visually appealing and consistent interfaces, focusing on layout, color, and typography to ensure a seamless and engaging user journey.",
    },
    {
        id: 3,
        title: "Web Development",
        description:
            "I build responsive and high-performance web applications using modern technologies, ensuring accessibility, scalability, and maintainability.",
    },
];

const Profession = () => {
    return (
        <section
            id="services"
            className="relative py-16 md:py-24 bg-softGray overflow-hidden"
        >

            {/* background blur */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />

            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

                {/* LEFT CONTENT */}
                <div className="flex flex-col justify-center">

                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                        What I Do
                    </p>

                    <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-black">
                        Crafting meaningful digital experiences.
                    </h2>

                    <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
                        I specialize in designing user experiences, crafting engaging
                        interfaces, and building modern web applications that combine
                        aesthetics with functionality.
                    </p>

                    <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
                        My approach blends creativity and technical expertise to
                        create intuitive, scalable, and user-centered digital products.
                    </p>

                    

                </div>

                {/* RIGHT CARDS */}
                <div className="space-y-6">

                    {rolesData.map((role) => (
                        <div
                            key={role.id}
                            className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/70 backdrop-blur-md p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >

                            {/* left accent */}
                            <div className="absolute left-0 top-0 h-full w-1 bg-primary opacity-40 transition-all duration-300 group-hover:opacity-100" />

                            {/* hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                            <div className="relative z-10">

                                <h3 className="text-xl md:text-2xl font-semibold text-black">
                                    {role.title}
                                </h3>

                                <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-600">
                                    {role.description}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Profession;