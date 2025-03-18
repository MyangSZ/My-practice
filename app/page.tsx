import Class from "./_components/Class";
import CourseAccordion from "./_components/CourseAccordion";
import CustomSelect from "./_components/CustomSelect";
import Procedure from "./_components/Procedure";

export default function CustomPage() {
  return (
    <div className="bg-gray-500 w-full">
      <CustomSelect />
      <CourseAccordion />
      {/* <Class /> */}
      <Procedure />
    </div>
  );
}
