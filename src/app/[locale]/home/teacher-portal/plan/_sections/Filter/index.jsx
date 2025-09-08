"use client";
import ErrorBoundary from '@/components/ErrorBoundary';
import React, { useMemo } from 'react'
import {motion , AnimatePresence} from "framer-motion";
import useHelpTeacherPortalPlanLessons from '@/tanstack-query/Home/Teacher-Portal/Plan/useHelp';
import Select from "react-select";
import SearchBar from '@/components/Searchbar';

export default function PlanFilterSection({
    selectedGrade,setSelectedGrade,
    selectedLevel,setSelectedLevel,
    selectedCurriculum,setSelectedCurriculum,
    selectedCategory,setSelectedCategory,
    setSearch
}) {
    const {data:helpData,...helpMethods} = useHelpTeacherPortalPlanLessons(); 
    const help = helpData?.data?.data;
    // Transform data to react-select format
    const gradeOptions = useMemo(() => 
        help 
    , [help]);
    
    const levelOptions = useMemo(() => {
        if (!selectedGrade) return [];
        return selectedGrade.levels;
    }, [selectedGrade]);

    const curriculumOptions = useMemo(() => {
        if (!selectedLevel) return [];
        return selectedLevel.curriculums;
    }, [selectedLevel]);

    const categoryOptions = useMemo(() => {
        if (!selectedCurriculum) return [];
        return selectedCurriculum.categories;
    }, [selectedCurriculum]);

    // Handle selection changes
    const handleGradeChange = (grade) => {
        setSelectedGrade(grade);
        setSelectedLevel(null);
        setSelectedCurriculum(null);
        setSelectedCategory(null);
    };

    const handleLevelChange = (level) => {
        setSelectedLevel(level);
        setSelectedCurriculum(null);
        setSelectedCategory(null);
    };

    const handleCurriculumChange = (curriculum) => {
        setSelectedCurriculum(curriculum);
        setSelectedCategory(null);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <ErrorBoundary  {...helpMethods}>
            
            <div className='flex gap-2 flex-wrap items-end'>
                {/* Grade Filter */}
                <motion.div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Grade</label>
                <Select
                    options={gradeOptions}
                    value={selectedGrade}
                    onChange={handleGradeChange}
                    placeholder="Select Grade"
                    getOptionLabel={(e)=>e.title}
                    getOptionValue={(e)=>e.id}
                    /* styles={selectStyles} */
                    isClearable
                />
                </motion.div>
                {/* AnimatePresence for conditional filters */}
                <AnimatePresence>
                    {selectedGrade && (
                        <motion.div
                            key="level"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                            <Select
                                options={levelOptions}
                                value={selectedLevel}
                                onChange={handleLevelChange}
                                placeholder="Select Level"
                                getOptionLabel={(e)=>e.title}
                                getOptionValue={(e)=>e.id}
                                isClearable
                            />
                        </motion.div>
                    )}
                    {selectedLevel && (
                        <motion.div
                            key="curriculum"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <label className="block text-sm font-medium text-gray-700 mb-2">Curriculum</label>
                            <Select
                                options={curriculumOptions}
                                value={selectedCurriculum}
                                onChange={handleCurriculumChange}
                                placeholder="Select Curriculum"
                                getOptionLabel={(e)=>e.title}
                                getOptionValue={(e)=>e.id}
                                isClearable
                            />
                        </motion.div>
                    )}
                    {selectedCurriculum && (
                        <motion.div
                            key="category"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                            <Select
                                options={categoryOptions}
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                placeholder="Select Category"
                                getOptionLabel={(e)=>e.title}
                                getOptionValue={(e)=>e.id}
                                isClearable
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className='ms-auto'>
                <SearchBar 
                handleSearch={(e)=>setSearch(e.target.value)}
                placeholder='Search'
                />
                </div>
                
            </div>
        </ErrorBoundary>
    )
}
