// Add Front
class SLL {
    // constructor, other methods, removed for brevity
    addFront(value) {
        var newNode = new SLLNode(value);
        if (this.head == null) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
}

// Remove Front
class SLL {
    // constructor, other methods, removed for brevity
    removeFront() {
        if (this.head) {
            this.head = this.head.next;
        }
        return this.head;
    }
}

// Front
class SLL {
    // constructor, other methods, removed for brevity
    front() {
        if (this.head) {
            return this.head.value;
        }
        return null;
    }
}


