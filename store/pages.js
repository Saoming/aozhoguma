/*
this is where we will eventually hold the data for all of our posts
*/
export const state = () => ({
    pages: [],
})
/*
this will update the state with the posts
*/
export const mutations = {
    updatePages: (state, pages) => {
        state.pages = pages
    }
}
/*

actions is where we will make an API call that gathers the posts,
and then commits the mutation to update it
*/
export const actions = {
    //this will be asynchronous
    async getPages({
        state,
        commit
    }) {
        //the first thing we’ll do is check if there’s any length to the posts array in state, which means we already called the API, so don’t do it again.
        if (state.pages.length) return
        try {
            let pages = await this.$axios.$get(`http://www.staging.wp.local/australia-guy/wp-json/acf/v3/pages/5`).then( response => {
                response;
                console.log( response );
            })
        } catch (err) {
            console.error(err);
        }
    }

}