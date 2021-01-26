import Axios from 'axios'
import { action, makeObservable, observable, runInAction} from 'mobx'
class UserStore {
    isLoggedIn = false
    user = {}
    userItems = []
    likedItems = []
    state = 'pending'
    constructor(){
        makeObservable(this, {
            isLoggedIn: observable,
            user: observable,
            userItems: observable,
            likedItems: observable,
            setUser: action,
            clickLike: action,
            state: observable
        })
    }

    async setUser(user)  {
        this.user = user
        this.state = 'pending'
        try{
            const { data } = await Axios.get(`http://localhost:5000/${this.user.id}/userItems`)
            const items = await data
            const liked = await Axios.get(`http://localhost:5000/${this.user.id}/userLikedItems`)
            runInAction(() => {
                this.userItems = items
                this.likedItems = liked.data
                this.isLoggedIn = true
                this.state = 'done'
                localStorage.setItem('userItems', items)
                localStorage.setItem('likedItems', liked.data)
                localStorage.setItem('isLoggedIn', true)
                localStorage.setItem('state', 'done')
            })
        } catch (err) {
            console.log(err)
            runInAction(() => {
            this.state = 'error'
            })
        }
    }
    
    clickLike(item) {
        this.likedItems.push(item)
    }
}

export default new UserStore ()