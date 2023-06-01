export const generateAndDownloadTextFile = ({
    fileName,
    format,
    content
}: {
    fileName: string,
    format: "csv" | "txt",
    content: string
}) => {
    const formats = {
        csv: "csv",
        txt: "plain",
    };
    const contentToSend = `data:text/${formats[format]};charset=utf-8,${content}`;
    const encodedUri = encodeURI(contentToSend);
    const link = document.createElement("a");

    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${fileName}.${format}`);
    document.body.appendChild(link); // Required for firefox
    link.click(); // download the data file named "emails.csv".
}
