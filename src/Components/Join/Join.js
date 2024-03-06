import React from "react";
import { motion } from "framer-motion";

 const BouncyCardsFeatures = () => {
  return (
    <section className="mt-6 mx-auto max-w-7xl px-4 py-4 text-slate-700">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl text-yellow-300 font-bold md:text-5xl ">
     JOIN US
          <div className="text-cyan-500"> You will love it!</div>
        </h2>
        
        
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Get amazing perks!</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-indigo-50">
               Lorem ipsum dolor sit amet. Aut rerum nobis est libero voluptatem vel alias nostrum. Hic libero libero ad accusantium reprehenderit ut Quis omnis eos debitis rerum et autem itaque aut earum veritatis et voluptatem dolores. Qui possimus quaerat nam cupiditate dicta ab laboriosam repellat est deleniti voluptates et odio quisquam? Qui voluptates nisi aut nesciunt amet et amet possimus non aspernatur similique aut perferendis aliquam? Qui omnis debitis ut commodi natus ad optio illum et harum facere ut dicta adipisci qui fugiat nostrum.Cum incidunt pariatur id eveniet ducimus est fugit reiciendis aut harum voluptas et iure nostrum a libero suscipit. Et internos facilis aut necessitatibus eius aut quidem voluptate ea architecto molestiae ad porro velit vel reprehenderit aute


            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Become a member</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
        Lorem ipsum dolor sit amet. Aut rerum nobis est libero voluptatem vel alias nostrum. Hic libero libero ad accusantium reprehenderit ut Quis omnis eos debitis rerum et autem itaque aut earum veritatis et voluptatem dolores. Qui possimus quaerat nam cupiditate dicta ab laboriosam repellat est deleniti voluptates et odio quisquam? Qui voluptates nisi aut nesciunt amet et amet possimus non aspernatur similique aut perferendis aliquam? Qui omnis debitis ut commodi natus ad optio illum et harum facere ut dicta adipisci qui fugiat nostrum.Cum incidunt pariatur id eveniet ducimus est fugit reiciendis aut harum voluptas et iure nostrum a libero suscipit. Et internos facilis aut necessitatibus eius aut quidem voluptate ea architecto molestiae ad porro velit vel reprehenderit aute

            </span>
          </div>
        </BounceCard>
      </div>
      {/* <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>And this too</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>And finally this</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
      </div> */}
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};

export default BouncyCardsFeatures;