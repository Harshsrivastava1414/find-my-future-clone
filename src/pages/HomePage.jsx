import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { BlogSection } from "../components/ui/BlogSection";
import { Navbar } from "../components/Navbar";
import { Footeer } from "../components/Footeer";
// import {MiniChat} from "./MiniChat";
import doubtImg from "../utils/havedoubt.png";
import confusedImg from "../utils/confused.png";
import searchImg from "../utils/search.png";
import solutionImg from "../utils/solution.png";

export default function HomePage()
 {
  const [subject, setSubject] = useState("in English");
  const navigate = useNavigate();

  const items = [
  { text: "Have a Doubt !!", image: doubtImg },
  { text: "Confused !!", image: confusedImg },
  { text: "Searching ....", image: searchImg },
  { text: "Get the Solution on FMT", image: solutionImg },
];
  const subjects = useMemo(
    () => [
      "in English",
      "in Maths",
      "in Science",
      "in History",
      "Computer",
      "Competetion",
    ],
    []
  );
  // const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setSubject((prev) => {
        const currentIndex = subjects.indexOf(prev);
        const nextIndex = (currentIndex + 1) % subjects.length;
        return subjects[nextIndex];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [subjects]);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen bg-gradient-to-br from-orange-300 to-orange-100 text-gray-900">
        <main className="p-4">
          <section className="flex flex-col lg:flex-row items-center justify-between px-4 py-16">
            <div className="max-w-xl space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Any Doubt?
                <br />
                Get Unstuck{" "}
                <span className="text-yellow-200 transition-all duration-500">
                  {subject}
                </span>
              </h1>
              <p className="text-white text-lg">
                Hit “Ask Now” & chat with experts for Instant Answers!
              </p>
              <div className="flex gap-4">
                <Input
                  placeholder="Ask Questions like 'Explain Newton's Laws?'"
                  className="rounded-full px-6"
                />
                <Button
                  className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6"
                  onClick={() => navigate("/login")}
                >
                  ASK NOW
                </Button>
              </div>
              <p className="text-white font-semibold flex items-center gap-2">
                <span className="text-yellow-100">🏅</span> Achieve your dreams
                with the guidance of India's finest educators!
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 mt-10 lg:mt-0 max-w-md w-full">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Didn't understand the concepts?
              </h2>
              <p className="mb-4 text-sm text-gray-600">
                Get{" "}
                <span className="text-orange-500 font-bold">instant help</span>{" "}
                from our expert teachers!
              </p>
              <Card className="mb-6">
                <CardContent className="flex items-center gap-3 py-4">
                  <span className="text-red-600 font-bold">❓</span> Describe
                  the process of DNA replication
                </CardContent>
              </Card>
              <Button
                className="bg-orange-500 hover:bg-orange-600 w-full py-3 rounded-full text-white text-lg"
                onClick={() => navigate("/call")}
              >
                📞 CALL NOW!
              </Button>
              <p className="text-xs text-center text-gray-500 mt-2">
                ⚡ Average response time: Under 2 minutes
              </p>
            </div>
          </section>
        </main>
      {
        <div className="fixed bottom-6 right-6 bg-white border rounded-xl shadow-xl p-4 w-64">
          <p className="text-sm font-medium">Wait! Before you go...</p>
          <p className="text-sm text-gray-600 mb-2">
            How about a quick chat? We're here to help with anything you need.
          </p>
          <Button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-2"
            // onClick={() => navigate("/chatbots")}  <MiniChat/>
          >
            Start chat
          </Button>
        </div>
        }
        <section className="text-center py-10 px-4">
          <h2 className="text-orange-500 text-sm font-semibold mb-2">
            CHOOSE YOUR EXPERIENCE
          </h2>
          <h1 className="text-3xl font-bold mb-1">Learn Your Way</h1>
          <p className="text-sm text-gray-500 mb-6">
            Select the perfect learning environment that matches your style and
            needs
          </p>

          <div className="space-y-4 max-w-md mx-auto">
            <div className="bg-orange-500 text-white p-4 rounded-lg flex items-center space-x-3">
              <span className="text-2xl">💻</span>
              <div>
                <h3 className="text-lg font-semibold">Online Classes</h3>
                <p className="text-sm">Learn from anywhere, anytime</p>
              </div>
            </div>

            <div className="bg-white shadow-sm p-4 rounded-lg flex items-center space-x-3">
              <span className="text-2xl">🏠</span>
              <div>
                <h3 className="text-lg font-semibold">Home Classes</h3>
                <p className="text-sm text-gray-600">
                  Personalized home learning
                </p>
              </div>
            </div>

            <div className="bg-white shadow-sm p-4 rounded-lg flex items-center space-x-3">
              <span className="text-2xl">🏢</span>
              <div>
                <h3 className="text-lg font-semibold">Center Classes</h3>
                <p className="text-sm text-gray-600">
                  Premium learning facilities
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <img
              src="/public/onlineclass.png"
              alt="Online Class"
              className="max-w-full h-auto"
            />
          </div>
        </section> 

        {/* MindMatters section */}
        <main className="p-6">
          <section className="text-center space-y-2 mb-8">
            <h1 className="text-2xl font-bold">Virtual Learning Excellence</h1>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="text-xl">📹</span>
              <span className="text-gray-700">HD Live Sessions</span>
            </div>
            <p className="text-sm text-gray-500">
              Crystal clear interactive classes
            </p>
          </section>

          <section className="text-center space-y-2 mb-6">
            <h2 className="text-3xl font-bold">MindMatters</h2>
            <p className="text-gray-500 text-sm">
              Nurturing Minds, Transforming Lives
            </p>
            <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full font-semibold">
              EVERY MIND MATTERS
            </div>
          </section>

          <section className="space-y-6">
            {[
              {
                title: "Daily Mindfulness",
                icon: "🧘",
                desc: "Discover peace through guided meditation and mindfulness exercises.",
                btn: "BEGIN JOURNEY",
              },
              {
                title: "Emotional Wellness",
                icon: "❤",
                desc: "Connect with expert therapists for personalized guidance.",
                btn: "START HEALING",
              },
              {
                title: "Personal Growth",
                icon: "📈",
                desc: "Transform your life with skill-building workshops.",
                btn: "GROW NOW",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow space-y-2 text-center"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
                <Button className="bg-orange-500 text-white mt-2 px-4 py-1 text-sm rounded-full">
                  {item.btn}
                </Button>
              </div>
            ))}
          </section>

          <section className="mt-10 bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-center mb-4">
              Your Wellness Journey
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              {[
                "Mindfulness Progress",
                "Emotional Balance",
                "Stress Management",
                "Personal Growth",
              ].map((label, idx) => (
                <div key={idx}>
                  <p>{label}</p>
                  <div className="w-full bg-orange-100 rounded-full h-2 mt-1">
                    <div className="bg-orange-500 h-2 rounded-full w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <section className="bg-orange-500 text-white text-center py-6 px-4">
          <h2 className="text-2xl font-bold">Ready to Transform Your Life?</h2>
          <p className="text-sm mt-1">
            Join thousands who have discovered their path to mental wellness
          </p>
          <Button className="bg-white text-orange-600 mt-4 px-4 py-2 rounded-full shadow">
            START YOUR JOURNEY TODAY
          </Button>
        </section>

        <section className="p-6">
          <div className="text-sm text-orange-500 font-semibold mb-2">
            ★ Trusted by 100,000+ Students
          </div>
          <h3 className="text-2xl font-bold text-orange-700 mb-4">
            Transform Your Learning Journey
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Connect with expert tutors, access personalized learning paths, and
            achieve your academic goals with our comprehensive tutoring
            platform.
          </p>
          <div className="flex gap-4 mb-6">
            <Button className="bg-orange-500 text-white px-4 py-2 rounded-full shadow">
              Find Your Tutor
            </Button>
            <Button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-full">
              How It Works
            </Button>
          </div>
          {/* // image grid section */}
          <div className="grid grid-cols-2 gap-4 mb-6">
  {items.map((item, index) => (
    <div
      key={index}
      className="bg-white p-4 rounded shadow text-center text-sm"
    >
      <img
        src={item.image}
        alt={item.text}
        className="w-16 h-16 mx-auto mb-2 object-contain"
      />
      <p>{item.text}</p>
    </div>
  ))}
</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 text-center text-sm gap-6 mb-10">
            <div>
              <p className="text-orange-700 font-bold text-lg">100K+</p>
              <p>Active Students</p>
            </div>
            <div>
              <p className="text-orange-700 font-bold text-lg">60K+</p>
              <p>Expert Tutors</p>
            </div>
            <div>
              <p className="text-orange-700 font-bold text-lg">4.9/5</p>
              <p>Student Rating</p>
            </div>
          </div>
        </section>

        <section className="bg-orange-500 text-white p-6 rounded-t-xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 text-center gap-6">
            <div>
              <p className="font-bold text-lg">4.9 Rating</p>
              <p className="text-sm">180,000 Reviews</p>
            </div>
            <div>
              <p className="font-bold text-lg">1.0 million+</p>
              <p className="text-sm">Happy Students</p>
            </div>
            <div>
              <p className="font-bold text-lg">60,000+</p>
              <p className="text-sm">Expert Tutors</p>
            </div>
            <div>
              <p className="font-bold text-lg">80,000+</p>
              <p className="text-sm">Classes everyday</p>
            </div>
          </div>
        </section>
        {/* Blog Section */}
        <div>
          <BlogSection />
        </div>

        {/* Footer Section */}
      </div>
      <div>
        <Footeer />
      </div>
    </>
  );
}
