import { NextJsIcon } from "@/components/icons/NextJsIcon"
import { PostgreSQLIcon } from "@/components/icons/PostgreSQLIcon"
import { SupabaseIcon } from "@/components/icons/SupabaseIcon"
import { ReactIcon } from "@/components/icons/ReactIcon"
import TypeScriptIcon from "@/components/icons/TypeScriptIcon"
import TailwindCSSIcon from "@/components/icons/TailwindCSSIcon"
import OpenAIIcon from "@/components/icons/OpenAIIcon";
import MongoIcon from "@/components/icons/MongoIcon";
import GoogleAnalytics from "@/components/icons/GoogleAnalytics"
import MapBoxIcon from "@/components/icons/MapBox"
import ClerkIcon from "@/components/icons/ClerkIcon"
import PartyKitIcon from "@/components/icons/PartyKitIcon"
import AwsIcon from "@/components/icons/AwsIcon"

export function getIcon(tag: string) {
    switch (tag) {
        case "Next.js":
            return <NextJsIcon />;
        case "React":
            return <ReactIcon />;
        case "TypeScript":
            return <TypeScriptIcon />;
        case "Supabase":
            return <SupabaseIcon />;
        case "PostgreSQL":
            return <PostgreSQLIcon />;
        case "Tailwind CSS":
            return <TailwindCSSIcon />;
        case "OpenAI":
            return <OpenAIIcon />;
        case "Whisper":
            return <OpenAIIcon />;
        case "MongoDB":
            return <MongoIcon />;
        case "Google Analytics":
            return <GoogleAnalytics />;
        case "Mapbox GL":
            return <MapBoxIcon/>;
        case "Clerk":
            return <ClerkIcon />;
        case "PartyKit":
            return <PartyKitIcon/>;
        case "Amazon EC2":
            return <AwsIcon />;
        default:
            return null;
    }
}
