import { Link } from 'react-router-dom';
import CourseChapters from './CourseChapters';
import CourseChapterBody from './CourseChapterBody';

const CourseContent = (props) => {
    return (
        <div className='courseContentPanel'>
            <div className='courseContentHeading'>
                <img src='Images/mysql.svg' alt='MySQL Course' height='100px' width='100px' />
                <h3>MySQL</h3>
            </div>
            <div className='courseContent'>
                <CourseChapters />
                <CourseChapterBody />
            </div>
        </div>
    );
}
export default CourseContent;