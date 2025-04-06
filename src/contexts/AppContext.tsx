
import React, { createContext, useContext, useState } from "react";

type Grade = "6th" | "7th" | "8th" | "9th" | "10th" | "11th" | "12th";
type Subject = "Mathematics" | "Science" | "Social Studies" | "English" | "Hindi" | "Kannada";
type StudyMode = "Textbook" | "Slides" | "Notes" | "Quiz";

interface AppContextType {
  studentName: string;
  setStudentName: (name: string) => void;
  selectedGrade: Grade | null;
  setSelectedGrade: (grade: Grade) => void;
  selectedSubject: Subject | null;
  setSelectedSubject: (subject: Subject) => void;
  selectedChapter: number | null;
  setSelectedChapter: (chapter: number) => void;
  selectedStudyMode: StudyMode | null;
  setSelectedStudyMode: (mode: StudyMode) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [studentName, setStudentName] = useState<string>("");
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [selectedStudyMode, setSelectedStudyMode] = useState<StudyMode | null>(null);

  return (
    <AppContext.Provider
      value={{
        studentName,
        setStudentName,
        selectedGrade,
        setSelectedGrade,
        selectedSubject,
        setSelectedSubject,
        selectedChapter,
        setSelectedChapter,
        selectedStudyMode,
        setSelectedStudyMode
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
