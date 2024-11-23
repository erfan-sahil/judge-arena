import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const LeaderboardPage = () => {
  const contestants = [
    { id: 1, name: "Alice", contest: 25, rating: 4.5 },
    { id: 2, name: "Bob", contest: 18, rating: 3.7 },
    { id: 3, name: "Charlie", contest: 10, rating: 4.2 },
    { id: 4, name: "David", contest: 30, rating: 4.8 },
    { id: 5, name: "Eve", contest: 15, rating: 4.1 },
    { id: 6, name: "Frank", contest: 12, rating: 4.3 },
    { id: 7, name: "Grace", contest: 22, rating: 3.9 },
    { id: 8, name: "Hank", contest: 27, rating: 4.6 },
    { id: 9, name: "Ivy", contest: 9, rating: 4.0 },
    { id: 10, name: "Jack", contest: 24, rating: 4.7 },
    { id: 11, name: "Kelly", contest: 19, rating: 4.2 },
    { id: 12, name: "Leo", contest: 26, rating: 3.8 },
    { id: 13, name: "Mona", contest: 11, rating: 4.4 },
    { id: 14, name: "Nina", contest: 17, rating: 4.5 },
    { id: 15, name: "Oscar", contest: 20, rating: 4.0 },
    { id: 16, name: "Paul", contest: 28, rating: 3.9 },
    { id: 17, name: "Quincy", contest: 21, rating: 4.1 },
    { id: 18, name: "Rita", contest: 14, rating: 4.3 },
    { id: 19, name: "Steve", contest: 23, rating: 4.6 },
    { id: 20, name: "Tina", contest: 16, rating: 3.8 },
  ];

  return (
    <div className="bg-[#0B0B0B] py-10 px-4 lg:px-10">
      <div className="border-[0.1px] border-[#bee8c0] rounded-md px-5 py-5">
        <h1 className="text-lg font-medium text-white mb-8">Top Contestants</h1>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-inherit text-[#bee8c0]">
              <TableHead className="w-[50%]">Contestants</TableHead>
              <TableHead className="w-[25%] text-center">Contests</TableHead>
              <TableHead className="w-[25%] text-center">Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contestants.map((contestant) => (
              <TableRow
                className="text-white hover:bg-neutral-800 hover:text-[#bee8c0]"
                key={contestant.id}
              >
                <TableCell className="py-3">{contestant.name}</TableCell>
                <TableCell className="text-center">
                  {contestant.contest}
                </TableCell>
                <TableCell className="text-center">
                  {contestant.rating}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LeaderboardPage;
