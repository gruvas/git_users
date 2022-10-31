import { IProject } from "../@types/interface_git_json"
import { ISubscriptions } from "../@types/interface"

const user_data_filtering = async (arr_projects: IProject[]) => {
    let arr: ISubscriptions[] = []

    arr_projects.map((element: IProject) => {
        arr.push({
            id: element.id,
            name: element.name,
            full_name: element.full_name,
            language: element.language,
            description: element.description,
            stargazers_count: element.stargazers_count
        })
    })

    return arr
}

export default user_data_filtering