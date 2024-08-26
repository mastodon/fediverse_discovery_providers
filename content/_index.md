## Summary 

This projects explores the possibilities for better search and
discovery on the Fediverse in the form of an optional, pluggable
service. This service should be decentralized, independent of any
one specific Fediverse service and respect user choice and privacy.

## Motivation

The Fediverse is a decentralized network of different servers,
often called "instances", running different kinds of social media
software that can interoperate by using a shared protocol, ActivityPub.

A user on a server running the microblogging service "Pleroma" can
follow a user on the photo sharing service "Pixelfed" and vice-versa.

Today, each application (and server/instance) that participates
in the Fediverse is largely independent when it comes to discovery.
A limited kind of user search is possible via the WebFinger
protocol, but content, trends and recommendations are not easily
shared across the network.

## Project Goals

We will build a reference discovery provider and protocol
(and an example consumer implementation, inside of Mastodon) to
enable users to discover content across the rich diversity of the
Fediverse.

The implementations and protocol will respect user privacy. Discovery
providers should be “pluggable” - servers should be able to choose
from one or more, in line with the decentralised and federated
nature of the network.

## Privacy Concerns

Not everything that is shared on the Fediverse is meant to be public.
But even with publicly shared content many creators are not
comfortable with it being indexed for search purposes.

Fediverse platforms like Mastodon that offer search have thus
made it opt-in and proposed a way to publish this information using
the shared protocol, ActivityPub [^1].

Our reference implementation will respect this setting and only
ingest content from creators who opted in to discovery in the
first place. Instances sending content to discovery providers
should as well make sure to only send such content to their
providers in the first place.

All other information a discovery provider gathers should be
anonymous. This is especially true and important for statistics
used to compute trends. Instances should only send data about
likes and boosts that is anonymized. A discovery provider should
never be able to reconstruct who liked or boosted what.

In addition to these measures we are open to feedback about how
to further ensure privacy for those that want or even need it.
We recognize this is an important topic for many Fediverse users
and want to make sure our proposal for discovery providers gets
this right.

## Community Participation

As mentioned, we are very much open to feedback. We would like
to discuss all proposals with the wider Fediverse service
implementer community.

If we have not made it clear enough before: Fediverse Discovery
Providers are not a project just for Mastodon. We would like to
make them usable *and* useful to as much Fediverse services as
possible. For this we require feedback and engagement from fellow
implementers.

That being said: The NGI Search project is on a fixed schedule and
we need to meet certain deadlines. This means we might not always
be able to incorporate all the feedback we get into the very first
draft of everything we publish. But rest assured that we are
committed to continue working on this even after this first
project has ended, so we will be able to make adjustmens later on.

## Specifications

As part of this project we will be working on two separate
specifications that build on each other:

1. A generic way to add "providers" to a Fediverse server instance.
   These "providers" might server other purposes than just search
   and discovery[^2], so we want to make sure server admins can
   easily add providers and choose which capabilities they would
   like to use.
2. The server-to-server protocol between an instance and a
   discovery provider. This will specify how an instance will
   "feed" content to a discovery provider to index. And how a
   discovery provider can be queried to actually search and
   discover content.

## Reference Implementation

Everyone should be able to implement the specifications above
with whatever technology they prefer. But to make a
proof-of-concept and provide everyone interested in creating
their own providers with a starting point, we will develop a
reference implementation of *a* discovery provider.

## Project Partners

{{< partner_logos >}}

"Fediverse Discovery Providers" is a project funded by NGI Search
and implemented by Mastodon gGmbh.

### NGI Search

NGI Search is a project that funds development of innovative,
open and privacy-respecting web search ideas as part of the
EU's Next Generation Internet initiative.

### Mastodon gGmbH

Mastodon gGmbH is a non-profit from Germany that develops the
Mastodon software. Mastodon is the leading federated
microblogging platform.

## FAQ

**Is this for Mastodon only?**

On the contrary: This project aims to specify how discovery
providers can work for all services based on ActivityPub.

**What if I do not want my posts to show up in search results?**

Depending what service you use, privacy is handled differently.
But most services will offer you different levels of privacy when
you post something. Fediverse Discovery Providers should only
ever index content clearly marked as "public". In addition, some
services, like Mastodon, allow you to opt-in to search and
discovery explicitly. Again, Fediverse Discovery Providers should
honor these settings and only index user data and content from
users who have opted-into that.

**Does a search and discovery provider not lead to centralization
and thus go against the federated nature of ActivityPub/thei
Fediverse?**

Absolutely not! Our proposal has federation in mind from the get-go.
We want to specify how a discovery provider works and interfaces
with a Fediverse server instance. We hope to inspire several
competing implementations of the specification.

Also, we expect several independent installations, both public
and private, of such providers. Fediverse server instances can
then add whichever provider they like and even more than one
provider at the same time. Two different instances could use
completely different discovery providers.

[^1]: https://codeberg.org/fediverse/fep/src/branch/main/fep/5feb/fep-5feb.md
[^2]: https://renchap.com/blog/post/evolving_mastodon_trust_and_safety/
