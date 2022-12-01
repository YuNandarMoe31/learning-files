// post js

postApp = () => {
	return {
        posts: [],
        post: {
            id: '',
            title: '',
            author: '',
            description: ''
        },

        // modal
        showModal: false,
        doEdit: false,
        modalTitle: '',

        // error message
        errorMessage: {
            title: '',
            author: '',
        },

        //get all posts
        allPosts() {
            fetch('/api/posts')
            .then(response => response.json())
            .then(data => this.posts = data)
        },

        //show create form
        create(){
            this.showModal = true;
            this.doEdit = false;
            this.post.id = '';
            this.post.title = '';
            this.post.author = '';  
            this.post.description = ''; 
            this.errorMessage.title = '';
            this.errorMessage.author = '';
            this.modalTitle = "Post Create";
        },

        //store post
        store() {
            const data = new FormData();
            data.append('title', this.post.title);
            data.append('author', this.post.author);
            data.append('description', this.post.description);

            axios.post('/api/posts', data)
            .then(response => {
                this.allPosts();
                this.post.id = '';
                this.post.title = '';
                this.post.author = '';
                this.post.description = ''; 
                this.showModal = false; 
            })
            .catch(error => {
                this.errorMessage.title = error.response.data.errors.title;
                this.errorMessage.author = error.response.data.errors.author;
            })
        },

        //show edit form
        edit(post){
            this.showModal = true;
            this.doEdit = true;
            this.modalTitle = "Post Update";
            this.errorMessage.title = '';
            this.errorMessage.author = '';
            this.post.id = post.id;
            this.post.title = post.title;
            this.post.author = post.author;
            this.post.description = post.description; 
        },

        //update post
        update(){
            axios.put(`/api/posts/${this.post.id}` , this.post)
            .then(response => {
                this.allPosts();
                this.post.title = '';
                this.post.author = '';
                this.post.description = ''; 
                this.showModal = false; 
                this.doEdit = false;
            })
            .catch(error => {
                this.errorMessage.title = error.response.data.errors.title;
                this.errorMessage.author = error.response.data.errors.author;
            })
        },

        //delete post
        destroy(id){
            if(!confirm('Are you sure to delete?')){
                return;
            }
            axios.delete('/api/posts/'+ id)
            .then(response => {
                this.allPosts();
            })
        },
    }
};

