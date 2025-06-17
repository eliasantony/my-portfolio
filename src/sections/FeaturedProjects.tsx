/*
================================================================================
|                      src/sections/FeaturedProjects.tsx                       |
================================================================================
| Description: A component to showcase the two main featured projects,         |
|              FoodFellas and Knot, each with a unique gradient background.    |
================================================================================
*/
import Section from "../components/Section";
import foodFellasMockup from "../assets/foodfellas_mockup.png";
import knotMockup from "../assets/knot_mockup.png";
import {ExternalLink} from "lucide-react";

interface FeaturedProjectProps {
  id: string;
  gradient: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  imgSrc: string;
  alignLeft?: boolean;
  techTagColor?: string;
  buttonColor?: string;
  textColor?: string;
}

const FeaturedProject = ({
  id,
  gradient,
  title,
  description,
  tech,
  liveUrl,
  imgSrc,
  alignLeft = true,
  techTagColor,
  buttonColor,
}: FeaturedProjectProps) => (
  <Section
    id={id}
    className={`relative overflow-hidden ${gradient} min-h-screen flex items-center`}
  >
    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
      {/* Mockup Image */}
      <div
        className={`transform transition-transform duration-500 hover:scale-105 ${
          alignLeft ? "md:order-1" : "md:order-2"
        }`}
      >
        <div className="w-[80%] mx-auto">
          <img
            src={imgSrc}
            alt={`${title} Mockup`}
            className="object-contain w-full h-auto shadow-none"
          />
        </div>
      </div>

      {/* Description */}
      <div className={`${alignLeft ? "md:order-2" : "md:order-1"}`}>
        <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-200 mb-6">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span
            key={t}
            className={`${techTagColor ?? 'bg-white/20 text-white'} px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm backdrop-brightness-110`}
          >
            {t}
          </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <button
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${buttonColor} hover:brightness-90`}
            >
                <ExternalLink className="inline mr-4" />
                Visit Page
            </button>
        </a>
          </a>
        </div>
      </div>
    </div>
  </Section>
);

const FeaturedProjects = () => {
  return (
    <>
      <FeaturedProject
        id="foodfellas"
        gradient="bg-gradient-to-br from-[#1A8100] to-[#FEB47B]"
        title="FoodFellas"
        description="An AI-powered recipe-sharing app where users can create, discover, and personalize meals. Features include smart search with TypeSense, smart recommendation with a vector database, AI-generated recipes and images, and image to recipe functionality."
        tech={[
          "Flutter",
          "Firebase",
          "TypeSense",
          "Google Cloud Functions",
          "Gemini API",
        ]}
        liveUrl="https://foodfellas.app"
        imgSrc={foodFellasMockup}
        alignLeft={true}
        techTagColor="bg-white/30 text-white"
        buttonColor="bg-[#1A8100]"
      />

      <FeaturedProject
        id="knot"
        gradient="bg-gradient-to-br from-[#E6683E] to-[#BA5680]"
        title="Knot"
        description="A private newsletter app for close-knit groups. Members respond to rotating questions with text, photos, or voice. Knot compiles and delivers a shared update to all members. Includes deep links, AI summaries, notifications and scheduling."
        tech={[
          "Flutter",
          "Firebase",
          "Riverpod",
          "Figma",
          "Google Cloud Functions",
          "Gemini API",
        ]}
        liveUrl="https://why-knot.app"
        imgSrc={knotMockup}
        alignLeft={false}
        techTagColor="bg-white/30 text-white"
        buttonColor="bg-[#BA5680]"
      />
    </>
  );
};

export default FeaturedProjects;
