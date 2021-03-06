import {contactContent, educationContent} from "../../resources/content";
import {projectsContent} from "../../resources/content";
import {skillsContent} from "../../resources/content";
import {workContent} from "../../resources/content";
import {indexContent} from "../../resources/content"


export const FETCH_EDUCATION = "FETCH_EDUCATION";
export const FETCH_PROJECTS = "FETCH_PROJECTS";
export const FETCH_SKILLS = "FETCH_SKILLS";
export const FETCH_WORK = "FETCH_WORK";
export const FETCH_INDEX = "FETCH_INDEX";
export const FETCH_CONTACT = "FETCH_CONTACT";

export const UPDATE_PAGE_NAME = "UPDATE_PAGE_NAME";
export const INDEX_PAGE_NAME = "index";
export const EDUCATION_PAGE_NAME = "education";
export const WORK_PAGE_NAME = "work";
export const SKILLS_PAGE_NAME = "skills";
export const PROJECTS_PAGE_NAME = "projects";
export const CONTACT_PAGE_NAME = "contact";

export function fetchEducation(){
    return {
        type: FETCH_EDUCATION,
        payload: educationContent.educationList
    }
}

export function fetchProjects(){
    return {
        type: FETCH_PROJECTS,
        payload: projectsContent.projectsList
    }
}

export function fetchSkills(){
    return {
        type: FETCH_SKILLS,
        payload: skillsContent.skillsList
    }
}

export function fetchWork(){
    return {
        type: FETCH_WORK,
        payload: workContent.workList
    }
}

export function fetchIndex(){
    return {
        type: FETCH_INDEX,
        payload: indexContent
    }
}

export function fetchContact(){
    return {
        type: FETCH_CONTACT,
        payload: contactContent
    }
}

export function updatePageName(pageName){
    return {
        type: UPDATE_PAGE_NAME,
        payload: pageName
    }
}
