fetch('https://radioempresaria.com.ar/graphql', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
},
body: JSON.stringify({
    query: `
    query GetPosts {
        posts {
        nodes {
            id
            title
        }
        }
    }
    `,
}),
})
.then(res => res.json())
.then(data => console.log(data.data.posts.nodes))
.catch(error => console.error('Error:', error));