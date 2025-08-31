class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            console.log(char);
            console.log(node.children.has(char));
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEndOfWord = true;
    }

    longestCommonPrefix() {
        let node = this.root;
        let prefix = "";
        while (node.children.size === 1 && !node.isEndOfWord) {
            const char = node.children.keys().next().value;
            prefix += char;
            node = node.children.get(char);
        }
        return prefix;
    }
}

function longestCommonPrefix(strs) {
    // base case 
    if (strs.length === 0 || strs === null) return "";
    const trie = new Trie();
    for (const word of strs) { 
        trie.insert(word); 
    }
    return trie.longestCommonPrefix();
}


console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
//console.log(longestCommonPrefix(["dog","racecar","car"]));    // ""