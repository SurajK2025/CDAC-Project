import { Link } from 'react-router-dom';
import CourseChapters from './CourseChapters';
import CourseChapterBody from './CourseChapterBody';

const CourseDetail = (props) => {
    return (
        <div className='courseContentPanel'>
            <div className='courseContentHeading'>
                <img src='Images/mysql.svg' alt='MySQL Course' height='100px' width='100px' />
                <h3>MySQL</h3>
            </div>
            <h4>Course Contents :</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut itaque
                            rem nulla quas incidunt sint Id quo sed iure iste ipsam, vitae accusantium
                            voluptates iusto libero doloribus perferendis.</p>
            <div className='courseContentChaptersList'>
                <ol>
                    <li>Inroduction</li>
                    <li>Inroduction</li>
                    <li>Inroduction</li>
                </ol>
            </div>
        </div>
    );
}
export default CourseDetail;