import axiosInstance from "@/utils/axiosInstance";
import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";



const fetch = ({page,search,grade_id,level_id,curriculum_id,category_id})=>{
    const params = new URLSearchParams();
    if (page) params.append("page", String(page));
    if (search) params.append("search", search);
    if (grade_id) params.append("grade_id", grade_id);
    if (level_id) params.append("level_id", level_id);
    if (curriculum_id) params.append("curriculum_id", curriculum_id);
    if (category_id) params.append("category_id", category_id);
    return teacherAxiosInstance.get(`/teacher-community/plan-lessons?${params.toString()}`);
};


const useIndexTeacherPortalPlanLessons = ({page,search,grade_id,level_id,curriculum_id,category_id})=>{
    return useQuery({
        queryKey:["homepage","teacher-portal","plan","index",
            grade_id,
            level_id,
            curriculum_id,
            category_id,
            search,
            page
        ],
        queryFn:()=>fetch({page,search,grade_id,level_id,curriculum_id,category_id})
    })
};

export default useIndexTeacherPortalPlanLessons;