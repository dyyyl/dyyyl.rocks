---
title: "Learn You a Big-O"
date: 2019-06-05 10:00:00
description: Let's Learn us a Big-O for Great Good!
---

### On Algorithms 🧘🏽‍♂️

An **algorithm** is a formal description of the logical steps it takes to carry
out a task. As programmers, we constantly use algorithms in our work to abstract
away complex logic into discrete, reproducable bits of code. These abstractions
form the foundation of everything we accomplish as developers; from data
fetching for our user interfaces, to sorting through the mountains of data that
may need to be fetched.

&nbsp;

There are a _lot_ of algorithms in the wild, each with their benefits and drawbacks
in specific situations - so, how do we decide which algorithm will be the right
tool for the job? Further, when we're writing an multiple implementations of the
same function, how can we reliably determine which is "best"? For that matter,
what is our vocabulary for describing the "best" case?!

&nbsp;

### Big... Oh! 🤭

If we want to generalize our code for the purposes of discussing performance and
comparing its value to other bits of code, we can use **Big-O** (aka **Bachmann–Landau**
or **asymptotic**) notation to classify algortihms according to how their running
time or space requirements grow as the input size grows.

&nbsp;

Having this vocabulary for discussing our code is _invaluable_ for discussing the
tradeoffs we make between different approaches to a problem, as well as identifying
inefficiencies in our code that we can polish!

&nbsp;

We will be primarily using Big-O notation to describe the relative efficiency of
a given solution, and we'll measure that efficiency by counting the number of steps
it will take for an algorithm to carry out its task.

&nbsp;

### Fun with Triangles 📐

Let's start playing with some code! For this example, we're going to practice counting
the number of steps an algorithm has to take by calculating triangles (the summation
of all numbers approaching n). Our first implementation will use a for-loop, like so:

&nbsp;

```js
const triangle = number => {
  let count = 0;
  for (let index = 0; index <= number; index++) {
    count += index;
  }
  return count;
};

triangle(5); // 15
triangle(100); // 5050
```

&nbsp;

We'll also implement a short, single-line function (leveraging some of our skill in maths):

&nbsp;

```js
const triangle = number => (number * (number + 1)) / 2;

triangle(5); // 15
triangle(100); // 5050
```

&nbsp;

### Abacus Cadabacus 🧮

So which implementation here is more efficient? In order to make an educated guess,
we need to start by counting all of the simple operations in each function.

&nbsp;

Our single line algorithm only has three operations: a multiplication, an addition,
and a division. This means that no matter what number you pass into it, only three
steps are ever needed to get your triangle!

&nbsp;

On the other hand, our for loop is going to take much longer to calculate a triangle
at scale, and we can tell somewhat intuitively from the number of times we have to
loop over a number to get to its triangle. If you were to pass in a 5, it would have
to loop over the number 5 times to arrive at a triangle - if you were to pass in a
million, it would take a million times! 🙈

&nbsp;

So now it's not just **_one_** operation, but **_n_** operations; and it isn't
just n additions, it's also n assignments to update the count, and another
set of additions and assignments to progress through your iterator on top of
that. Regardless of the exact number you pass in, the number of operations will
grow _proportionally_ with it.

&nbsp;

### A Formal Introduction 🎩

&nbsp;

As always, you can find me on Twitter [@dyyyyyyyyyl][twitter], or on [Github][dyl]

[twitter]: https://twitter.com/dyyyyyyyyyl
[dyl]: http://github.com/dyyyl

&nbsp;
