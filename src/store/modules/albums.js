import axios from 'axios'
import * as types from '@/constants/mutation-types'
import * as albumConst from '@/constants/album'
// initial state
// shape: [{ id, quantity }]



const state = {
    //all list of albums from url
    savedList: [],
    //albums{albumList:[],albumLimit:10}
    albums: {
        list: [],
        limit: 10
    },
    loading: true,
    // 
    sortOptions: {
        sortBy: 'author',
        sortOrder: ['desc', 'asc'],
        ascSorting: true
    }
}

// getters
const getters = {

    getAllAlbumListLength: state => state.savedList.length,

    getAlbumList: state => state.albums.list,
    getAlbumListLength: state => state.albums.list.length,
    getalbumsLimit: state => state.albums.limit,

    getSortOrder: state => state.sortOptions.sortOrder[Number(state.sortOptions.ascSorting)],
    getSortBy: state => state.sortOptions.sortBy,

    getOneAlbumByID: state => (id) => {

        const a = state.savedList.filter(function(obj) {
            return obj.author == id ? obj : null
        })
        console.log(a)
        return a
    }
}

// actions
const actions = {

    initialAlbums({ commit }) {

        axios
            .get(albumConst.LINK)
            .then(
                function(response) {

                    commit(types.UPDATE_ALBUMS, response.data)
                    commit(types.COMPUTE_LIST_AUTHOR)
                    commit(types.CHANGE_LOADING_STATE)
                    commit(types.COMPUTE_LIST_AUTHOR1)
                    commit(types.ORDER_BY_KEY, state.sortOptions.sortBy)

                }.bind(this)
            )
            .catch(function(error) {
                // handle error
                console.log(error);
            });

    },
    setAlbumLimit({ commit }, limit) {

        commit(types.CHANGE_ALBUM_LENGTH, limit)
        commit(types.COMPUTE_LIST_AUTHOR)
        commit(types.ORDER_BY_KEY, state.sortOptions.sortBy)

    },

    sortAlbums({ commit }, sort) {

        commit(types.SET_SORT_PARAMETERS, sort)

        if (sort == 'photos')

            commit(types.ORDER_BY_LENGTH, sort)

        else
            commit(types.ORDER_BY_KEY, sort)


    }
}

// mutations
const mutations = {
    [types.CHANGE_LOADING_STATE](state) {
        state.loading = !state.loading
    },
    [types.UPDATE_ALBUMS](state, albums) {

        state.albums.list = albums
        state.savedList = albums
    },
    [types.CHANGE_ALBUM_LENGTH](state, limit) {

        state.albums.limit = limit
    },
    [types.SET_SORT_PARAMETERS](state, sort) {

        state.sortOptions.ascSorting = !state.sortOptions.ascSorting
        state.sortOptions.ascSorting = state.sortOptions.sortBy === sort ? state.sortOptions.ascSorting : !state.sortOptions.ascSorting
        state.sortOptions.getSortOrder = state.sortOptions.sortOrder[Number(state.sortOptions.ascSorting)]
        state.sortOptions.sortBy = sort

    },
    [types.ORDER_BY_KEY](state, sort) {

        const list = [...state.albums.list]

        list.sort((a, b) => a[sort].localeCompare(b[sort], undefined, {
            numeric: true
        }));

        if (state.sortOptions.getSortOrder == 'desc') {
            list.reverse()
        }
        state.albums.list = list
    },

    [types.ORDER_BY_LENGTH](state, sort) {

        const list = [...state.albums.list]

        list.sort(function(a, b) {
            return a[sort].length - b[sort].length;
        });

        if (state.sortOptions.getSortOrder == 'desc') {
            list.reverse()
        }
        state.albums.list = list
    },
    [types.COMPUTE_LIST_AUTHOR](state) {

        const result = [];
        let i = 1,
            BreakException = {},
            list = state.savedList,
            le = state.albums.limit

        try {
            list.forEach(
                (function(hash) {
                    return function(a) {
                        if (!hash[a.author]) {

                            if (i > le) throw BreakException;
                            i++;

                            hash[a.author] = {
                                author: a.author,
                                id: String(i),
                                photos: []
                            };

                            result.push(hash[a.author]);
                        }
                        hash[a.author].photos.push({
                            id: a.id
                        });
                    };
                })(Object.create(null))
            );

            state.albums.list = result

        } catch (e) {

            state.albums.list = result

            if (e !== BreakException) throw e;
        }
    },
    [types.COMPUTE_LIST_AUTHOR1](state) {

        const result = [];
        let i = 1,
            BreakException = {},
            list = state.savedList
        try {
            list.forEach(
                (function(hash) {
                    return function(a) {
                        if (!hash[a.author]) {

                            hash[a.author] = {
                                author: a.author,
                                id: String(i),
                                photos: []
                            };

                            result.push(hash[a.author]);

                        }
                        hash[a.author].photos.push({
                            id: a.id
                        });
                        i++
                    };
                })(Object.create(null))
            );

            state.savedList = result

        } catch (e) {

            state.savedList = result

            if (e !== BreakException) throw e;
        }
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}