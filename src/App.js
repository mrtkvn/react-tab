import React from "react";
import Tabs from "./components/Tabs";
import "./App.css";

function App() {
  return (
    
    <main >
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-7 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 id="tablist" className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Danish Composers
            </h1>
          </div>
        </div>
        <Tabs>
          <div label="Maria Ahlefeldt" id={1}  >
            Maria Theresia Ahlefeldt (16 January 1755 – 20 December 1810) was a
            Danish, (originally German), composer. She is known as the first
            female composer in Denmark. Maria Theresia composed music for
            several ballets, operas, and plays of the royal theatre. She was
            given good critic as a composer and described as a “virkelig
            Tonekunstnerinde” ('a True Artist of Music').
          </div>
          <div label="Carl Andersen" id={2}  >
            Carl Joachim Andersen (29 April 1847 – 7 May 1909) was a Danish
            flutist, conductor and composer born in Copenhagen, son of the
            flutist Christian Joachim Andersen. Both as a virtuoso and as
            composer of flute music, he is considered one of the best of his
            time. He was considered to be a tough leader and teacher and
            demanded as such a lot from his orchestras but through that style he
            reached a high level.
          </div>
        </Tabs>
      </div>
    </main>
  );
}

export default App;
