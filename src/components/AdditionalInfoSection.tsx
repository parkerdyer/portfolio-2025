import { communityInvolvement, languages } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

export default function AdditionalInformation() {
  return (
    <section
      id="additional-info"
      className="py-10 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold my-8 text-center md:text-left">
            💡 Additional Information
          </h2>
        </MotionWrapper>
        <h3 className="text-xl font-bold">🗣️ Spoken Languages</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {languages.map((language, index) => (
            <MotionWrapper
              key={language.language + language.level}
              delay={index * 0.1}
            >
              <GlassCard className="p-4 dark:border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full">
                <h4 className="font-medium">{language.language}</h4>
                <p className="text-xs text-muted-foreground mb-1">
                  {language.level}
                </p>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
        <h3 className="text-xl font-bold mt-6">🤝 Community Involvement</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {communityInvolvement.map((involvement, index) => (
            <MotionWrapper key={index} delay={index * 0.1}>
              <GlassCard className="p-4 dark:border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full">
                <h4 className="font-medium">{involvement.organization}</h4>
                <p className="text-xs mb-1">{involvement.role}</p>
                <p className="text-xs text-muted-foreground mb-1">
                  {involvement.date}
                </p>
                <p className="text-xs text-muted-foreground">
                  {involvement.description}
                </p>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
