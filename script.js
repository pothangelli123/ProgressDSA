const dpProblems = {
    'Day 1-2: Mastering 1D DP': {
        concepts: [
            'Fibonacci Numbers (Top-Down vs Bottom-Up)',
            'Climbing Stairs (Basic State Transition)',
            'House Robber (Decision-Making in DP)',
            'Maximum Subarray Sum (Kadane\'s Algorithm)',
            'Jump Game Variants (Greedy + DP)'
        ],
        problems: [
            'Climbing Stairs',
            'House Robber',
            'House Robber II',
            'Jump Game',
            'Jump Game II',
            'Maximum Subarray (Kadane\'s Algo)',
            'Longest Arithmetic Subsequence',
            'Partition Equal Subset Sum',
            'Coin Change',
            'Coin Change II'
        ]
    },
    'Day 3-4: 2D DP & Grid-Based Problems': {
        concepts: [
            'Grid Paths (Unique Paths, Minimum Path Sum)',
            'DP on Matrices (Maximal Square, Cherry Pickup)',
            'Longest Path in Grid (Memoization)',
            'DP with Directional Constraints'
        ],
        problems: [
            'Unique Paths',
            'Unique Paths II',
            'Minimum Path Sum',
            'Maximal Square',
            'Dungeon Game',
            'Cherry Pickup',
            'Longest Increasing Path in a Matrix',
            'Edit Distance'
        ]
    },
    'Day 5: Knapsack & Subset Sum Variations': {
        concepts: [
            '0/1 Knapsack (Classic DP)',
            'Subset Sum Problem',
            'Partition Problems (Equal Sum, Minimum Difference)',
            'Unbounded Knapsack (Rod Cutting, Coin Change)'
        ],
        problems: [
            'Partition Equal Subset Sum',
            'Last Stone Weight II',
            'Target Sum',
            'Coin Change',
            'Rod Cutting Problem (GFG)'
        ]
    },
    'Day 6: LCS & LIS Variants': {
        concepts: [
            'Longest Common Subsequence (LCS)',
            'Longest Increasing Subsequence (LIS)',
            'Edit Distance',
            'String Matching with DP'
        ],
        problems: [
            'Longest Common Subsequence',
            'Edit Distance',
            'Longest Palindromic Subsequence',
            'Distinct Subsequences',
            'Longest Increasing Subsequence',
            'Russian Doll Envelopes',
            'Minimum Insertion Steps to Make a String Palindrome'
        ]
    },
    'Day 7: Advanced DP': {
        concepts: [
            'DP on Trees (LCA, Diameter, Path Problems)',
            'Digit DP (Counting Numbers with Constraints)',
            'DP with Bitmasking (TSP, Job Assignment)',
            'Matrix Exponentiation (Fibonacci in O(log N))'
        ],
        problems: [
            'Word Break',
            'Word Break II',
            'Palindrome Partitioning II',
            'Shortest Path Visiting All Nodes (Bitmasking)',
            'Number of Ways to Wear Different Hats to Each Person (Bitmasking)',
            'Digit DP Problem Example - Counting Numbers Without Consecutive 1s (GFG)'
        ]
    }
};

// Add this at the top after dpProblems
const defaultCode = {
    javascript: `// Write your JavaScript solution here
function solution() {
    // Your code here
}`,
    python: `# Write your Python solution here
def solution():
    # Your code here
    pass`,
    cpp: `// Write your C++ solution here
class Solution {
public:
    void solve() {
        // Your code here
    }
};`,
    java: `// Write your Java solution here
class Solution {
    public void solve() {
        // Your code here
    }
}`
};

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('problemContainer');
    let totalProblems = 0;
    
    // Create sections for each day
    for (const [day, content] of Object.entries(dpProblems)) {
        const section = document.createElement('div');
        section.className = 'day-section';
        
        // Add day title
        const title = document.createElement('h2');
        title.textContent = day;
        section.appendChild(title);
        
        // Add concepts
        const conceptsDiv = document.createElement('div');
        conceptsDiv.className = 'concepts';
        const conceptsTitle = document.createElement('h3');
        conceptsTitle.textContent = 'Concepts:';
        conceptsDiv.appendChild(conceptsTitle);
        const conceptsList = document.createElement('ul');
        content.concepts.forEach(concept => {
            const li = document.createElement('li');
            li.textContent = concept;
            conceptsList.appendChild(li);
        });
        conceptsDiv.appendChild(conceptsList);
        section.appendChild(conceptsDiv);
        
        // Add problems
        const problemsTitle = document.createElement('h3');
        problemsTitle.textContent = 'Problems:';
        section.appendChild(problemsTitle);
        
        const problemsList = document.createElement('ul');
        problemsList.className = 'problem-list';
        content.problems.forEach(problem => {
            totalProblems++;
            const li = document.createElement('li');
            li.className = 'problem-item';
            
            // Create problem header div to contain checkbox and buttons
            const problemHeader = document.createElement('div');
            problemHeader.className = 'problem-header';
            
            // Create checkbox container
            const checkboxContainer = document.createElement('div');
            checkboxContainer.className = 'checkbox-container';
            
            // Create checkbox wrapper
            const checkboxWrapper = document.createElement('div');
            checkboxWrapper.className = 'custom-checkbox-wrapper';
            
            // Create checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = problem.replace(/\s+/g, '_');
            checkbox.checked = getCookie(checkbox.id) === 'true';
            
            // Create custom checkbox
            const customCheckbox = document.createElement('span');
            customCheckbox.className = 'custom-checkbox';
            
            // Create label
            const label = document.createElement('label');
            label.className = 'problem-label';
            label.htmlFor = checkbox.id;
            label.textContent = problem;
            
            // Assemble checkbox components in the header
            checkboxWrapper.appendChild(checkbox);
            checkboxWrapper.appendChild(customCheckbox);
            checkboxContainer.appendChild(checkboxWrapper);
            checkboxContainer.appendChild(label);
            problemHeader.appendChild(checkboxContainer);
            
            // Create actions container for the code button
            const actionsContainer = document.createElement('div');
            actionsContainer.className = 'problem-actions';
            
            // Create code button
            const codeBtn = document.createElement('button');
            codeBtn.className = 'code-btn';
            codeBtn.innerHTML = '<svg style="width:14px;height:14px;margin-right:4px;vertical-align:middle" viewBox="0 0 24 24"><path fill="currentColor" d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z"/></svg>Code';
            
            // Create code editor container
            const codeEditorContainer = document.createElement('div');
            codeEditorContainer.className = 'code-editor-container';
            
            // Create language selector
            const languageSelect = document.createElement('select');
            languageSelect.className = 'language-select';
            const languages = [
                { value: 'javascript', text: 'JavaScript' },
                { value: 'python', text: 'Python' },
                { value: 'cpp', text: 'C++' },
                { value: 'java', text: 'Java' }
            ];
            languages.forEach(lang => {
                const option = document.createElement('option');
                option.value = lang.value;
                option.textContent = lang.text;
                languageSelect.appendChild(option);
            });
            
            // Create save button
            const saveBtn = document.createElement('button');
            saveBtn.className = 'save-code-btn';
            saveBtn.textContent = 'Save';
            
            // Create textarea for code editor
            const textarea = document.createElement('textarea');
            
            // Initialize CodeMirror
            let editor = null;
            
            codeBtn.addEventListener('click', () => {
                codeEditorContainer.classList.toggle('active');
                if (!editor) {
                    try {
                        const problemId = problem.replace(/\s+/g, '_');
                        // Load saved language preference or default to JavaScript
                        const savedLang = getCookie(`${problemId}_lang`) || 'javascript';
                        languageSelect.value = savedLang;

                        editor = CodeMirror.fromTextArea(textarea, {
                            mode: getModeForLanguage(savedLang),
                            theme: 'monokai',
                            lineNumbers: true,
                            autoCloseBrackets: true,
                            matchBrackets: true,
                            indentUnit: 4,
                            tabSize: 4,
                            lineWrapping: true,
                            extraKeys: {"Ctrl-Space": "autocomplete"},
                            styleActiveLine: true
                        });
                        
                        // Load saved code or default code for the selected language
                        const savedCode = getCookie(`${problemId}_code`);
                        editor.setValue(savedCode || defaultCode[savedLang]);
                    } catch (error) {
                        console.error('Error loading code:', error);
                        editor.setValue(defaultCode[languageSelect.value]);
                    }
                }
            });
            
            // Add helper function to get the correct mode
            function getModeForLanguage(language) {
                const modeMap = {
                    javascript: 'javascript',
                    python: 'python',
                    cpp: 'text/x-c++src',
                    java: 'text/x-java'
                };
                return modeMap[language];
            }
            
            // Update language change handler
            languageSelect.addEventListener('change', () => {
                const lang = languageSelect.value;
                const currentCode = editor.getValue();
                const defaultForLang = defaultCode[lang];
                
                // Only set default code if current code is empty or matches default code of another language
                const isDefaultCode = Object.values(defaultCode).some(code => 
                    currentCode.trim() === code.trim()
                );
                
                if (!currentCode.trim() || isDefaultCode) {
                    editor.setValue(defaultForLang);
                }
                
                editor.setOption('mode', getModeForLanguage(lang));
            });
            
            // Handle save
            saveBtn.addEventListener('click', () => {
                try {
                    const code = editor.getValue();
                    const lang = languageSelect.value;
                    const problemId = problem.replace(/\s+/g, '_');
                    
                    // Save both code and language
                    setCookie(`${problemId}_code`, code);
                    setCookie(`${problemId}_lang`, lang);
                    
                    showCompletionMessage('Code saved successfully!');
                } catch (error) {
                    console.error('Error saving code:', error);
                    // Show error message to user
                    const errorMsg = document.createElement('div');
                    errorMsg.style.cssText = `
                        position: fixed;
                        bottom: 20px;
                        right: 20px;
                        background: #f44336;
                        color: white;
                        padding: 15px 25px;
                        border-radius: 8px;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                        z-index: 1000;
                    `;
                    errorMsg.textContent = 'Error saving code. Please try again.';
                    document.body.appendChild(errorMsg);
                    setTimeout(() => errorMsg.remove(), 3000);
                }
            });
            
            // Create code editor header
            const codeEditorHeader = document.createElement('div');
            codeEditorHeader.className = 'code-editor-header';
            
            // Assemble code editor components
            codeEditorHeader.appendChild(languageSelect);
            codeEditorHeader.appendChild(saveBtn);
            codeEditorContainer.appendChild(codeEditorHeader);
            codeEditorContainer.appendChild(textarea);

            // Assemble the components
            actionsContainer.appendChild(codeBtn);
            problemHeader.appendChild(actionsContainer);
            
            li.appendChild(problemHeader);
            li.appendChild(codeEditorContainer);
            
            // Add checkbox event listener
            checkbox.addEventListener('change', () => {
                setCookie(checkbox.id, checkbox.checked);
                if (checkbox.checked) {
                    li.classList.add('completed');
                    showCompletionMessage(problem);
                } else {
                    li.classList.remove('completed');
                }
                updateProgress();
            });

            if (checkbox.checked) {
                li.classList.add('completed');
            }
            
            problemsList.appendChild(li);
        });
        section.appendChild(problemsList);
        container.appendChild(section);
    }
    
    updateProgress();
    
    // Add new function to show completion message
    function showCompletionMessage(problemName) {
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #4caf50;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            animation: slideIn 0.5s ease, fadeOut 0.5s ease 2.5s forwards;
            z-index: 1000;
        `;
        message.textContent = `✅ Completed: ${problemName}`;
        document.body.appendChild(message);

        setTimeout(() => {
            document.body.removeChild(message);
        }, 3000);
    }

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // Enhance progress bar update
    function updateProgress() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const completed = Array.from(checkboxes).filter(cb => cb.checked).length;
        const percentage = (completed / totalProblems) * 100;
        
        const progressBar = document.getElementById('totalProgress');
        progressBar.style.width = `${percentage}%`;
        
        const progressText = document.getElementById('progressText');
        progressText.innerHTML = `
            <strong>${completed}</strong> of <strong>${totalProblems}</strong> problems completed 
            (<strong>${Math.round(percentage)}%</strong>)
        `;

        // Add celebration effect for 100% completion
        if (percentage === 100) {
            celebrateCompletion();
        }
    }

    function celebrateCompletion() {
        const celebration = document.createElement('div');
        celebration.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.9);
            color: white;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            z-index: 1000;
        `;
        celebration.innerHTML = `
            <h2>🎉 Congratulations! 🎉</h2>
            <p>You've completed all the DP problems!</p>
            <button onclick="this.parentElement.remove()" 
                    style="padding: 10px 20px; margin-top: 15px; 
                           border: none; border-radius: 5px; 
                           background: #1a73e8; color: white; 
                           cursor: pointer;">
                Close
            </button>
        `;
        document.body.appendChild(celebration);
    }
});

function setCookie(name, value) {
    // Encode the value to handle special characters and line breaks
    const encodedValue = encodeURIComponent(value);
    document.cookie = `${name}=${encodedValue};path=/;max-age=31536000`; // Expires in 1 year
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=').map(c => c.trim());
        if (cookieName === name) {
            // Decode the value when retrieving
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

// Add a helper function to format code based on language
function formatCode(code, language) {
    // You could add language-specific formatting here
    return code;
} 