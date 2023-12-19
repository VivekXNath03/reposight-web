// "use client";
// import React from "react";
// import AppBar from "../components/common/AppBar/AppBar";
// const page = () => {
//   return (
//     <div className="w-screen h-screen bg-zinc-950 flex-col items-center justify-center ">
//       <AppBar></AppBar>
//       <div className="flex flex-col w-2/3 max-h-fit text-white ">
//         <h1>c</h1>
//         <h1>c</h1>
//         <h1>c</h1>
//         <h1>c</h1>
//       </div>
//     </div>
//   );
// };

// export default page;

"use client";
import RepoCard from "../components/RepoCard";
import React from "react";
import AppBar from "../components/common/AppBar/AppBar";
import { motion } from "framer-motion";
const Page = () => {
  return (
    <div className="w-screen max-h-fit bg-zinc-950 flex flex-col items-center">
      <AppBar />
      <div className="flex flex-col items-center md:w-2/3 w-4/5 max-h-fit text-white mt-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;

//fff
