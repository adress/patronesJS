const fn = async () => {
    const response = await fetch('https://api.github.com/users/andres');
    const data = await response.json();
    return data;
}

fn().then(console.log);