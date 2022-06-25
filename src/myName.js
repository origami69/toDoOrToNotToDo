function myPage() {
    let myProjects = []


    function createProject(name) {
        this.name = name
    }


    function addProject(name) {
        let toProject = new createProject(name)
        myProjects.push(toProject)
    }



    function inputExternalHtml() {
        let body = document.querySelector('body')

        function exampleHtml() {
            addProject('To-Do List')
            let newDiv = document.createElement('div')
            newDiv.classList = 'creatorHolder'
            let linker = document.createElement('a')
            linker.classList = 'clickChanger'
            let svg = document.createElement('div')
            svg.innerHTML += '<svg viewBox="0 0 24 24" width="24px" height"24px">' + ' <path fill="currentColor" d="M17,4V10L15,8L13,10V4H9V20H19V4H17M3,7V5H5V4C5,2.89 5.9,2 7,2H19C20.05,2 21,2.95 21,4V20C21,21.05 20.05,22 19,22H7C5.95,22 5,21.05 5,20V19H3V17H5V13H3V11H5V7H3M5,5V7H7V5H5M5,19H7V17H5V19M5,13H7V11H5V13Z" />' + '</svg>\n'
            linker.appendChild(svg)
            let words = document.createElement('p')
            words.innerText = 'To-Do List Project'
            words.classList = 'cum'
            linker.appendChild(words)
            newDiv.appendChild(linker)
            let exit = document.createElement('a')
            exit.classList = 'sucker'
            exit.innerText = 'X'
            newDiv.appendChild(exit)
            let targeter = document.querySelector('.sideBar')
            targeter.appendChild(newDiv)
            let inner = document.querySelector('.container')
            let taskHolder = document.createElement('div')
            taskHolder.classList = 'userOutput'
            let userBox = document.createElement('div')
            userBox.classList = 'projectTask'
            taskHolder.appendChild(userBox)
            let toppy = document.createElement('div')
            toppy.classList = 'userTop'
            userBox.appendChild(toppy)
            let title = document.createElement('div')
            title.classList = 'name'
            title.innerText = 'Title: Awsome'
            toppy.appendChild(title)
            let descr = document.createElement('div')
            descr.classList = 'description'
            descr.innerText = 'Description: make an awsome css button'
            toppy.appendChild(descr)
            let dueBy = document.createElement('div')
            dueBy.classList = 'dueDate'
            let dooer = ('Due By: ' + new Date().toISOString().slice(0, 10))
            dueBy.innerText = dooer
            toppy.appendChild(dueBy)
            let importance = document.createElement('div')
            importance.classList = 'priority'
            importance.innerText = 'Priority: very important uwu'
            toppy.appendChild(importance)
            let checkBalance = document.createElement('button')
            checkBalance.classList = 'checkList'
            let supper = document.createElement('div')
            supper.className = 'jesusmore'
            supper.style.visibility = 'hidden'
            supper.innerHTML += '<svg style="width:24px;height:24px" viewBox="0 0 24 24">' + '   <path fill="white" d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />' + '</svg>\n'
            checkBalance.appendChild(supper)
            toppy.appendChild(checkBalance)
            let getRid = document.createElement('button')
            getRid.classList = 'remover'
            getRid.innerText = 'X'
            toppy.appendChild(getRid)
            let takeNotes = document.createElement('p')
            takeNotes.classList = 'notes'
            takeNotes.innerText = 'Should be red and white and have some very cool css features'
            userBox.appendChild(takeNotes)
            inner.appendChild(taskHolder)
            exit.addEventListener('click', function() {
                if (linker.classList.contains('clickChanger')) {
                    return alert('cannot delete selected project')
                }
                myProjects.splice(0, 1)
                newDiv.remove()
                taskHolder.remove()
            })
            linker.addEventListener('click', function() {
                document.querySelector('.clickChanger').className = 'project'
                document.querySelector('.userOutput').className = 'userOutputHide'
                linker.className = 'clickChanger'
                taskHolder.className = 'userOutput'
            })
            getRid.addEventListener('click', function() {
                userBox.remove()
            })
            checkBalance.addEventListener('click', function() {
                if (checkBalance.classList.contains('checkList')) {
                    supper.style.visibility = 'visible'
                    checkBalance.className = 'checker'

                } else {
                    checkBalance.className = 'checkList'
                    supper.style.visibility = 'hidden'
                }

            })

        }
        exampleHtml()


        function proectPress() {
            let bodyInsert = document.createElement('div')
            bodyInsert.classList = 'bodyInsert'
            let aparition = document.createElement('div')
            aparition.classList = 'appa'
            let exitOut = document.createElement('a')
            exitOut.classList = 'exit'
            exitOut.innerText = 'X'
            aparition.appendChild(exitOut)
            let inputName = document.createElement('div')
            inputName.classList = 'inputName'
            inputName.innerText = 'Create Project'
            aparition.appendChild(inputName)
            let projectName = document.createElement('input')
            projectName.type = 'text'
            projectName.placeholder = 'Names'
            projectName.classList = 'projectName'
            projectName.id = 'bruh'
            aparition.appendChild(projectName)
            let projectSubmit = document.createElement('input')
            projectSubmit.type = 'button'
            projectSubmit.value = 'Submits'
            projectSubmit.classList = 'theSubmitter'
            aparition.appendChild(projectSubmit)
            bodyInsert.appendChild(aparition)
            body.appendChild(bodyInsert)
        }
        proectPress()

        function taskPress() {
            let bodyInsert2 = document.createElement('div')
            bodyInsert2.classList = 'bodyInsert2'
            let aparition = document.createElement('div')
            aparition.classList = 'appa2'
            let exitOut = document.createElement('a')
            exitOut.classList = 'exit2'
            exitOut.innerText = 'X'
            aparition.appendChild(exitOut)
            let inputName = document.createElement('div')
            inputName.classList = 'inputName2'
            inputName.innerText = 'Create a Task'
            aparition.appendChild(inputName)
            let inputName2 = document.createElement('div')
            inputName2.classList = 'inputName3'
            inputName2.innerText = 'Enter Task Name'
            aparition.appendChild(inputName2)
            let projectName = document.createElement('input')
            projectName.type = 'text'
            projectName.placeholder = 'Name'
            projectName.required
            projectName.classList = 'projectName2'
            aparition.appendChild(projectName)
            let inputName3 = document.createElement('div')
            inputName3.classList = 'inputName3'
            inputName3.innerText = 'Description of task'
            aparition.appendChild(inputName3)
            let projectName2 = document.createElement('input')
            projectName2.type = 'text'
            projectName2.placeholder = 'Description'
            projectName2.required
            projectName2.classList = 'projectDescrip'
            aparition.appendChild(projectName2)
            let inputName4 = document.createElement('div')
            inputName4.classList = 'inputName3'
            inputName4.innerText = 'Date Due for task'
            aparition.appendChild(inputName4)
            let projectName3 = document.createElement('input')
            projectName3.type = 'date'
            let today = new Date().toISOString().slice(0, 10)
            projectName3.min = today
            projectName3.required
            projectName3.classList = 'projectDate'
            aparition.appendChild(projectName3)
            let inputName5 = document.createElement('div')
            inputName5.classList = 'inputName3'
            inputName5.innerText = 'Priority of task'
            aparition.appendChild(inputName5)
            let projectName4 = document.createElement('input')
            projectName4.type = 'text'
            projectName4.placeholder = 'Priority'
            projectName4.required
            projectName4.classList = 'projectPriority'
            aparition.appendChild(projectName4)
            let inputName6 = document.createElement('div')
            inputName6.classList = 'inputName3'
            inputName6.innerText = 'Extra Notes'
            aparition.appendChild(inputName6)
            let projectName5 = document.createElement('input')
            projectName5.type = 'text'
            projectName5.placeholder = 'Notes'
            projectName5.required
            projectName5.classList = 'notess'
            aparition.appendChild(projectName5)
            let projectSubmit = document.createElement('input')
            projectSubmit.type = 'button'
            projectSubmit.value = 'Submit'
            projectSubmit.classList = 'theSubmitter2'
            aparition.appendChild(projectSubmit)
            bodyInsert2.appendChild(aparition)
            body.appendChild(bodyInsert2)
        }
        taskPress()
    }
    inputExternalHtml()

    function clickEvents() {

        document.querySelector('.creator').addEventListener('click', function() {
            document.querySelector('.bodyInsert').style.visibility = 'visible'
            document.querySelector('.exit').addEventListener('click', function() {
                document.querySelector('.bodyInsert').style.visibility = 'hidden'
            })
        })
        document.querySelector('.toDoCreate').addEventListener('click', function() {
            document.querySelector('.bodyInsert2').style.visibility = 'visible'
            document.querySelector('.exit2').addEventListener('click', function() {
                document.querySelector('.bodyInsert2').style.visibility = 'hidden'
            })
        })
        document.querySelector('#bruh').addEventListener('change', function() {
            let dataProject = document.querySelector('#bruh').value
            console.log(dataProject)
        })
        document.querySelector('.theSubmitter').addEventListener('click', function() {
            const dataProject = document.querySelector('#bruh').value
            if (dataProject == '' || myProjects.some(elem => elem.name === dataProject)) {
                return alert('can not have projects with same name or leave blank')
            } else {
                addProject(dataProject)
                let newDiv = document.createElement('div')
                newDiv.classList = 'creatorHolder'
                let linker = document.createElement('a')
                linker.classList = 'project'
                let svg = document.createElement('div')
                svg.innerHTML += '<svg viewBox="0 0 24 24" width="24px" height"24px">' + ' <path fill="currentColor" d="M17,4V10L15,8L13,10V4H9V20H19V4H17M3,7V5H5V4C5,2.89 5.9,2 7,2H19C20.05,2 21,2.95 21,4V20C21,21.05 20.05,22 19,22H7C5.95,22 5,21.05 5,20V19H3V17H5V13H3V11H5V7H3M5,5V7H7V5H5M5,19H7V17H5V19M5,13H7V11H5V13Z" />' + '</svg>\n'
                linker.appendChild(svg)
                let words = document.createElement('p')
                words.innerText = dataProject
                words.classList = 'cum'
                linker.appendChild(words)
                newDiv.appendChild(linker)
                let exit = document.createElement('a')
                exit.classList = 'sucker'
                exit.innerText = 'X'
                newDiv.appendChild(exit)
                document.querySelector('#bruh').value = ''
                document.querySelector('.bodyInsert').style.visibility = 'hidden'
                let targeter = document.querySelector('.sideBar')
                let targetter = document.querySelector('.container')
                let taskHolder = document.createElement('div')
                taskHolder.classList = 'userOutputHide'
                targetter.appendChild(taskHolder)
                targeter.appendChild(newDiv)
                console.log(myProjects)


                exit.addEventListener('click', function() {
                    if (linker.classList.contains('clickChanger')) {
                        return alert('cannot delete selected project')
                    }
                    for (var i = 0; i < myProjects.length; i++) {
                        if (myProjects[i].name == dataProject) {
                            myProjects.splice(i, 1);

                            break;
                        }
                    }
                    taskHolder.remove()
                    newDiv.remove()
                })
                linker.addEventListener('click', function() {
                    document.querySelector('.clickChanger').className = 'project'
                    document.querySelector('.userOutput').className = 'userOutputHide'
                    linker.className = 'clickChanger'
                    taskHolder.className = 'userOutput'
                })

            }


        })
        document.querySelector('.theSubmitter2').addEventListener('click', function() {
            let tits = document.querySelector('.projectName2').value
            let projdesc = document.querySelector('.projectDescrip').value
            let projDate = document.querySelector('.projectDate').value
            let projPri = document.querySelector('.projectPriority').value
            let projNote = document.querySelector('.notess').value
            if (tits === '' || projdesc === '' || projDate === '' || projPri === '' || projNote === '') {
                return alert('You need to fill each input')
            } else {
                let userBox = document.createElement('div')
                userBox.classList = 'projectTask'
                let toppy = document.createElement('div')
                toppy.classList = 'userTop'
                userBox.appendChild(toppy)
                let title = document.createElement('div')
                title.classList = 'name'
                let displayer = ('Title: ' + tits)
                title.innerText = displayer
                toppy.appendChild(title)
                let descr = document.createElement('div')
                descr.classList = 'description'
                let displayer2 = ('Description: ' + projdesc)
                descr.innerText = displayer2
                toppy.appendChild(descr)
                let dueBy = document.createElement('div')
                dueBy.classList = 'dueDate'
                let displayer3 = ('Due By: ' + projDate)
                dueBy.innerText = displayer3
                toppy.appendChild(dueBy)
                let importance = document.createElement('div')
                importance.classList = 'priority'
                let displayer4 = ('Priority: ' + projPri)
                importance.innerText = displayer4
                toppy.appendChild(importance)
                let checkBalance = document.createElement('button')
                checkBalance.classList = 'checkList'
                let supper = document.createElement('div')
                supper.className = 'jesusmore'
                supper.style.visibility = 'hidden'
                supper.innerHTML += '<svg style="width:24px;height:24px" viewBox="0 0 24 24">' + '   <path fill="white" d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />' + '</svg>\n'
                checkBalance.appendChild(supper)
                toppy.appendChild(checkBalance)
                let getRid = document.createElement('button')
                getRid.classList = 'remover'
                getRid.innerText = 'X'
                toppy.appendChild(getRid)
                let takeNotes = document.createElement('p')
                takeNotes.classList = 'notes'
                let displayer5 = ('Notes: ' + projNote)
                takeNotes.innerText = displayer5
                userBox.appendChild(takeNotes)
                document.querySelector('.bodyInsert2').style.visibility = 'hidden'
                let inner = document.querySelector('.userOutput')
                inner.appendChild(userBox)
                getRid.addEventListener('click', function() {
                    userBox.remove()
                })

                checkBalance.addEventListener('click', function() {
                    if (checkBalance.classList.contains('checkList')) {
                        supper.style.visibility = 'visible'
                        checkBalance.className = 'checker'

                    } else {
                        checkBalance.className = 'checkList'
                        supper.style.visibility = 'hidden'
                    }

                })
                document.querySelector('.projectName2').value = ''
                document.querySelector('.projectDescrip').value = ''
                document.querySelector('.projectDate').value = ''
                document.querySelector('.projectPriority').value = ''
                document.querySelector('.notess').value = ''
            }

        })
    }
    clickEvents()


}
myPage()
export { myPage };