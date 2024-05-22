import axios from 'axios';

const API_URL = 'https://openlibrary.org/subjects/love.json?limit=100';

const getBooks = async () => {
    const response = await axios.get(API_URL);
    return response.data.works.map(work => ({
        title: work.title,
        author_name: work.authors[0]?.name || 'Unknown',
        first_publish_year: work.first_publish_year,
        subject: work.subject ? work.subject.join(', ') : 'N/A',
        ratings_average: work.ratings_average || 'N/A',
        author_birth_date: 'Unknown',  // This data isn't directly available in this endpoint
        author_top_work: 'Unknown'    // This data isn't directly available in this endpoint
    }));
};

export { getBooks };
