const axios = require('axios');
const API_KEY = `eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI5OTg3MzAxMSwiYWFpIjoxMSwidWlkIjozMDc4MDQxOCwiaWFkIjoiMjAyMy0xMS0zMFQyMjoxNDowNy4zODlaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjUwMjg1OSwicmduIjoidXNlMSJ9.NoCjKRfIsn9ZHq953yQv_YRjUDB7ah2_t8E9AVGx8bY`
const API_URL = 'https://api.monday.com/v2';

const getProperties = async (req, res) => {
    try {
        const query = `query {
    boards(ids:["5605135736"]) {
      columns(ids: ["dropdown"]) {
        id
        title
        type
        settings_str
      }
    }
  }`;

        const { data } = await axios.post(API_URL, {
            query
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': API_KEY
            }
        });

        console.log(data.data);

        const projects = data.data.boards[0].columns[0].labels
        // const projects = boardData.map((item) => {
        //     const { id, column_values } = item

        //     return {
        //         id,
        //         name: column_values[3].text
        //     }
        // })

        const uniqueProjects = projects.filter((name, index, array) => {
            const isUnique = !array.slice(0, index).some((prevProject) => prevProject.name === name.name);
            return isUnique;
        });

        return res.status(200).json({
            error: false,
            message: "Property retrieved successfully.",
            properties: uniqueProjects
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error');
    }
}

module.exports = { getProperties }
