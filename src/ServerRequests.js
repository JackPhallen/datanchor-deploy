
const ROOT_URL = "http://127.0.0.1:8000";

async function postData(path = '', data = {}) {
    const response = await fetch(`${ROOT_URL}${path}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json()
}

export async function deploy(clusterName, region, maxNodes, minNodes, projectName, callback) {
    const data = {
        clusterName: clusterName,
        region: region,
        maxNodes: maxNodes,
        minNodes: minNodes,
        projectName: projectName
    };
    console.log(data);

    postData("/anchor/deploy", data)
        .then( data => {
            callback(data);
        })
}

export async function healthCheck(clusterName, region, maxNodes, minNodes, projectName, callback) {
    const data = {
        clusterName: clusterName,
        region: region,
        maxNodes: maxNodes,
        minNodes: minNodes,
        projectName: projectName
    };

    postData("/anchor/check", data)
        .then( data => {
            callback(data);
        })
}

export async function getIP(clusterName, callback) {
    const data = {
        clusterName: clusterName,
    };

    postData("/anchor/getip", data)
        .then( data => {
            callback(data);
        })
}