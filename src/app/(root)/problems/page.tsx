import React from "react";

const ProblemsPage = () => {
  const categories = [
    {
      type: 1,
      name: "Ad-hoc",
      number: 200,
      problems: [
        {
          id: 1,
          problemName: "Brute Force",
        },
        {
          id: 2,
          problemName: "Implementation",
        },
        {
          id: 3,
          problemName: "Simulation",
        },
      ],
    },
    {
      type: 2,
      name: "Data Structure",
      number: 103,
      problems: [
        {
          id: 1,
          problemName: "Binary Search Tree",
        },
        {
          id: 2,
          problemName: "Fenwick Tree",
        },
        {
          id: 3,
          problemName: "Linear Data Structure",
        },
        {
          id: 4,
          problemName: "Merge Sort Tree",
        },
        {
          id: 5,
          problemName: "Palindromic Tree",
        },
        {
          id: 6,
          problemName: "Prefix Tree",
        },
        {
          id: 7,
          problemName: "Segment Tree",
        },
        {
          id: 8,
          problemName: "Wavelet Tree",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#0B0B0B] py-10 px-4 lg:px-10">
      <div className="border-[0.1px] border-[#bee8c0] rounded-md px-5 py-5">
        <h1 className="text-lg font-medium text-white mb-14">Beginner</h1>
        <div className="flex justify-between">
          <p className="text-[#25D366] hover:underline">Easy Problems</p>
          <p className="text-[#bee8c0]">58</p>
        </div>
      </div>
      <div className="border-[0.1px] border-[#bee8c0] rounded-md px-5 py-5 mt-5">
        <h1 className="text-lg font-medium text-white mb-14">Categories</h1>
        {categories.map((category) => (
          <div className="mb-12" key={category.type}>
            <div className="flex justify-between mb-3">
              <p className="text-[#25D366] hover:underline">{category.name}</p>
              <p className="text-[#bee8c0]">{category.number}</p>
            </div>
            {category.problems.map((problem) => (
              <p
                key={problem.id}
                className="text-[#bee8c0] text-sm border-b-[0.1px] hover:text-white border-[#bee8c0] py-1 mb-4"
              >
                {problem.problemName}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemsPage;
