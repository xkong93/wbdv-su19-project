export default class EditorService {
    url = "http://localhost:8080/api/";
    urlHeroku = 'https://peaceful-savannah-55840.herokuapp.com/api/'
    static myInstance = null;


    static getInstance() {
        if (EditorService.myInstance == null) {
            EditorService.myInstance = new EditorService();
        }
        return this.myInstance;
    }

    createEditor = (editor, code) =>
        fetch(this.urlHeroku + "editor/" + code, {
            method: 'POST',
            body: JSON.stringify(editor),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res)


    getAllEditor = () =>
        fetch(this.urlHeroku + "editor/product")
            .then(res => res.json());


}
