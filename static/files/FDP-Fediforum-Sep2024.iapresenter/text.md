# Fediverse Discovery Providers
#### discovery for the social web

This is a brief introduction to a new project that is being initiated by the Mastodon team, for use by any Fediverse service or instance. 

Discovery for the social web - an optional, pluggable service to discover rich content across the Fediverse, respecting user choice and privacy.


---
## The Fediverse
### is rich, awesome, full of great people & content
	&nbsp;
#### (*we* know this, we're at Fediforum)

https://upload.wikimedia.org/wikipedia/commons/9/93/Fediverse_logo_proposal.svg
background: true
size: contain
x: right
y: top
opacity: 20%

There is loads of great content out there. But, people often have to work hard to find it.

---
### Problem statement
	• Fediverse services communicate via ActivityPub, but are largely independent for (content) search and discovery.
	&nbsp;
	• Small and medium instances especially may not easily find topics and content of interest.

Right now, you can use WebFinger to find actors in the Fediverse, but typically there is no easy way to discover content between instances. I might be interested in 3D Printing, but if I am not on the 3dp.chat Mastodon instance I might miss content being shared in Lemmy without knowing that community existed as well.
---

https://www.fediscovery.org/images/instances_federating.svg
size: contain

#### Federation

---

https://www.fediscovery.org/images/instances_searching.svg
size: contain

#### Default (per-instance) search

---

https://www.fediscovery.org/images/instances_using_search_providers.svg
size: contain

#### Discovery via *optional* providers

---
	### • optional, pluggable 
	### • none, one, many
	### • independent of instance type
	### • respect user choice & privacy

---
### NGI Search
	The project was initiated by the Mastodon team, via a grant from NGI Search, under their themes:
	• *Search and Discovery Features for Existing Digital Common Projects*
	• *Privacy Preserving Technologies in Search and Discovery*

NGI Search is a project that funds development of innovative, open and privacy-respecting web search ideas as part of the EU’s Next Generation Internet initiative.
We are contributing to "Search and Discovery Features for Existing Digital Common Projects" by improving these user-facing functionalities for Mastodon and other Fediverse software.
Our approach is privacy-focused, especially compared to search and discovery algorithms of commercial social networks and is therefore contributing to the topic "Privacy Preserving Technologies in Search and Discovery".

The NGI Search project is on a fixed schedule and we need to meet certain deadlines. This means we might not always be able to incorporate all the feedback we get into the very first draft of everything we publish. We are committed to continue working on this even after this first project has ended, so we will be able to make adjustments later on. 
---
### Privacy
	• FEP-5feb defines actor-level attribute to express consent (or lack thereof) to public objects being indexed for search.
	• Instances must only send indexable data to Discovery Providers.
	• Instances must only send anonymised data around e.g. boosts or trends.
	• Open to feedback, more in the proposal.
---
### Specifications
	• Definition of a "Fediverse Auxiliary Service Provider" (& how to add one to a Fediverse server).
	• S2S protocols between instances and discovery providers (how to send content to a provider for indexing; how to query and find content in a provider).

As part of this project we will be working on specifications in two different, but related areas

“providers” might serve other purposes than just search and discovery, so we want to make sure server admins can easily add providers and choose which capabilities they would like to use.

At a high level we have some thoughts on how an instance would securely register to interact with a provider already and will share these kinds of specifications soon.

---
### Reference Implementation
	• We will build *a* discovery provider (as a minimum, to prove the concept).
	• Anyone can build their own, with their own preferred tech stack.

As part of the NGI Search proposal, the project will build a reference implementation.

Everyone should be able to implement the specifications with whatever technology they prefer. But to make a proof-of-concept and provide everyone interested in creating their own providers with a starting point, we will develop a reference implementation of a discovery provider.

Also, we expect several independent installations, both public and private, of such providers. Fediverse server instances can then add whichever provider they like and even more than one provider at the same time. Two different instances could use completely different discovery providers.
---
### Current Status
	• Project is funded & announced. 
	• We are listening to feedback.
	 1 -> define "Fediverse Auxiliary Service Provider"
	 2 -> define Discovery Provider (^^ one of these)
	 3 -> build a reference implementation

First step for this project is to define what we currently call a "Fediverse Auxiliary Service Provider". For this project it will be for discovery-related features, but we want to use this for other things like anti-spam, abuse-fighting, media processing (and/or storage?) or even community notes

---
### Questions & Next Steps
	• Some questions covered in site FAQ, more coming in already... 
	 *e.g. Q: "is it the same as a relay?" A: TBD; not created with intent to replace the relay concept, but, in the same space.*
	• We will share proposed definitions for Fediverse Auxiliary Service Providers.
	• We do not have answers to everything today; WIP!

---

	&nbsp;
	👀️ 
	https://fediscovery.org
	&nbsp;
	👀️
	https://github.com/mastodon/fediverse_discovery_providers
	&nbsp;
	(for now) follow `@MastodonEngineering@mastodon.social`

We welcome contributions from all Fediverse software implementers.

If you find a major problem with one of the specifications, please open an issue.

If you would like to correct spelling, grammar etc., please create a pull request.

If you have questions, plan a larger PR (maybe your own provider specification?) or simply want to discuss anything related to auxiliary service providers, please open a discussion.