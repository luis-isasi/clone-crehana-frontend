import { memo } from 'react';
import CourseCard from '@Components/CourseCard';

const NewCourses = () => {
  return (
    <section>
      <h5 className="my-5 font-extrabold sm:text-xl md:text-2xl">
        Cursos online nuevos
      </h5>
      <div className="grid grid-flow-row gap-10 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
        <CourseCard inModal={false} />
        <CourseCard inModal={false} />
        <CourseCard inModal={false} />
        <CourseCard inModal={false} />
      </div>
    </section>
  );
};

export default memo(NewCourses);
