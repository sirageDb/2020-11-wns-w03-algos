/**
 * In this challenge, you have to add a list of skills to each group (based on 
 * students skills in the group). Duplicates skills for one group is not permitted. Skills must be
 * sorted alphabatically. Groups order, students order and students skills order must remain
 * untouched.
 * 
 * @param groups List of groups without skills, but with students
 * @returns List of groups with a new prop skills
 */

// ↓ uncomment bellow lines and add your response!

/* export default function ({ groups }: { groups: GroupWithSills[] }): GroupWithSills[] {
    for (let i = 0; i < groups.length; i++) {
        let groupSkillsList: string[] = [];
        groups[i].students.map((student: any) => {
            student.skills.map((skill: string) => {
                groupSkillsList.push(skill);
            })
        });
        let unique = [... new Set(groupSkillsList)];
        let uniqueSorted = unique.sort((a: string, b: string) => {
            return a.localeCompare(b);
        })
        groups[i]["skills"] = uniqueSorted;

    }
    console.log(groups)
    return groups;
} */

/*  export default function ({ groups }: { groups: Group[] }): GroupWithSills[] {
    const t =  groups.map((g) => {
        const skills: string[] = [];
        g.students.forEach((s) =>
            s.skills.forEach((sk) => {
                if (!skills.includes(sk)) {
                    skills.push(sk);
                }
            })
        );
        return { ...g, skills: skills.sort((a, b) => a.localeCompare(b)) }
    });
    console.log(t);
    return t;
} */
 
// used interfaces, do not touch
interface Student {
    name: string;
    age: number;
    skills: string[];
}

export interface Group {
    students: Student[];
    name: string;
}

export interface GroupWithSills extends Group {
    skills: string[];
}