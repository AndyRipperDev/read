import { Segment, Image, Grid, Header } from "semantic-ui-react";
import React, { Component } from "react";
import ResponsiveContainerNav from "./ResponsiveContainerNav";

class InfoPage extends Component {
  state = {};

  render() {
    return (
      <ResponsiveContainerNav>
        <Segment basic style={{ paddingTop: "5em" }}>
          <Grid columns={3} width={15} stackable>
            <Grid.Column width={5} textAlign="center">
              <Image
                size="massive"
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              />
              <Header as="h3" content="Book" />
              <Header as="h4" content="Author" />
            </Grid.Column>

            <Grid.Column verticalAlign="middle" width={10}>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
                feugiat, turpis at pulvinar vulputate, erat libero tristique
                tellus, nec bibendum odio risus sit amet ante. Maecenas lorem.
                Etiam egestas wisi a erat. Aenean vel massa quis mauris vehicula
                lacinia. Vivamus porttitor turpis ac leo. Etiam quis quam. Etiam
                egestas wisi a erat. Integer rutrum, orci vestibulum ullamcorper
                ultricies, lacus quam ultricies odio, vitae placerat pede sem
                sit amet enim. Nullam at arcu a est sollicitudin euismod. Donec
                vitae arcu. Aenean vel massa quis mauris vehicula lacinia. Duis
                viverra diam non justo. Donec quis nibh at felis congue commodo.
                Nullam lectus justo, vulputate eget mollis sed, tempor sed
                magna. Nam sed tellus id magna elementum tincidunt.
              </p>

              <p>
                Fusce tellus odio, dapibus id fermentum quis, suscipit id erat.
                Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum
                in, elit. Nullam eget nisl. Quisque porta. Mauris suscipit,
                ligula sit amet pharetra semper, nibh ante cursus purus, vel
                sagittis velit mauris vel metus. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Vivamus
                luctus egestas leo. Aliquam id dolor. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Mauris dolor felis, sagittis at, luctus sed, aliquam non,
                tellus. Duis condimentum augue id magna semper rutrum. Etiam
                ligula pede, sagittis quis, interdum ultricies, scelerisque eu.
                Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis
                vel sapien. Etiam dictum tincidunt diam. Mauris dolor felis,
                sagittis at, luctus sed, aliquam non, tellus. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Nulla accumsan, elit sit amet varius semper, nulla
                mauris mollis quam, tempor suscipit diam nulla vel leo.
                Suspendisse sagittis ultrices augue. Praesent vitae arcu tempor
                neque lacinia pretium. Aliquam erat volutpat.
              </p>

              <p>
                Mauris tincidunt sem sed arcu. Pellentesque arcu. Aliquam id
                dolor. Nulla non arcu lacinia neque faucibus fringilla. Integer
                imperdiet lectus quis justo. Nullam sit amet magna in magna
                gravida vehicula. Nunc dapibus tortor vel mi dapibus
                sollicitudin. Duis viverra diam non justo. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum
                at dui. Fusce nibh. Nullam lectus justo, vulputate eget mollis
                sed, tempor sed magna. Etiam dictum tincidunt diam.
              </p>

              <p>
                Phasellus faucibus molestie nisl. Duis pulvinar. Nullam sapien
                sem, ornare ac, nonummy non, lobortis a enim. Phasellus et lorem
                id felis nonummy placerat. Nam quis nulla. Sed vel lectus. Donec
                odio tempus molestie, porttitor ut, iaculis quis, sem. Aliquam
                ante. Pellentesque arcu. Integer rutrum, orci vestibulum
                ullamcorper ultricies, lacus quam ultricies odio, vitae placerat
                pede sem sit amet enim. Curabitur ligula sapien, pulvinar a
                vestibulum quis, facilisis vel sapien.
              </p>

              <p>
                Mauris tincidunt sem sed arcu. Itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat. Quis
                autem vel eum iure reprehenderit qui in ea voluptate velit esse
                quam nihil molestiae consequatur, vel illum qui dolorem eum
                fugiat quo voluptas nulla pariatur? Nulla est. Nullam justo
                enim, consectetuer nec, ullamcorper ac, vestibulum in, elit.
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                fugiat quo voluptas nulla pariatur? Nam libero tempore, cum
                soluta nobis est eligendi optio cumque nihil impedit quo minus
                id quod maxime placeat facere possimus, omnis voluptas assumenda
                est, omnis dolor repellendus. Praesent dapibus. Quisque porta.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Ut tempus purus
                at lorem. Mauris tincidunt sem sed arcu. Integer in sapien.
                Nulla accumsan, elit sit amet varius semper, nulla mauris mollis
                quam, tempor suscipit diam nulla vel leo. Neque porro quisquam
                est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora incidunt
                ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>

              <p>
                Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus
                libero, eget facilisis enim ipsum id lacus. Mauris dictum
                facilisis augue. Sed elit dui, pellentesque a, faucibus vel,
                interdum nec, diam. Aliquam id dolor. Fusce aliquam vestibulum
                ipsum. Duis bibendum, lectus ut viverra rhoncus, dolor nunc
                faucibus libero, eget facilisis enim ipsum id lacus. Mauris
                metus. Aliquam erat volutpat. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit. Curabitur bibendum justo non orci.
                Praesent id justo in neque elementum ultrices. Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut aliquid ex ea commodi consequatur? Maecenas
                libero. In sem justo, commodo ut, suscipit at, pharetra vitae,
                orci. Aenean placerat. Quis autem vel eum iure reprehenderit qui
                in ea voluptate velit esse quam nihil molestiae consequatur, vel
                illum qui dolorem eum fugiat quo voluptas nulla pariatur? Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Integer tempor. Donec
                ipsum massa, ullamcorper in, auctor et, scelerisque sed, est.
              </p>

              <p>
                Aliquam erat volutpat. Etiam ligula pede, sagittis quis,
                interdum ultricies, scelerisque eu. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Etiam sapien elit, consequat eget, tristique
                non, venenatis quis, ante. Phasellus faucibus molestie nisl.
                Nunc auctor. Vestibulum erat nulla, ullamcorper nec, rutrum non,
                nonummy ac, erat. Etiam sapien elit, consequat eget, tristique
                non, venenatis quis, ante. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Praesent dapibus. Maecenas sollicitudin. Morbi
                scelerisque luctus velit. In sem justo, commodo ut, suscipit at,
                pharetra vitae, orci. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec vitae arcu.
                Nullam at arcu a est sollicitudin euismod. Aenean placerat.
                Nullam rhoncus aliquam metus. In rutrum. Mauris metus.
              </p>

              <p>
                Nam quis nulla. Fusce tellus odio, dapibus id fermentum quis,
                suscipit id erat. Integer imperdiet lectus quis justo. Cum
                sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. In rutrum. Donec ipsum massa, ullamcorper in,
                auctor et, scelerisque sed, est. Et harum quidem rerum facilis
                est et expedita distinctio. Cras pede libero, dapibus nec,
                pretium sit amet, tempor quis. Cras elementum. Phasellus enim
                erat, vestibulum vel, aliquam a, posuere eu, velit. Nunc auctor.
                Proin mattis lacinia justo. Vestibulum fermentum tortor id mi.
                Duis pulvinar.
              </p>

              <p>
                Etiam neque. Vestibulum fermentum tortor id mi. Mauris dictum
                facilisis augue. Praesent vitae arcu tempor neque lacinia
                pretium. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos hymenaeos. Praesent dapibus. Duis
                pulvinar. Donec ipsum massa, ullamcorper in, auctor et,
                scelerisque sed, est. Fusce tellus odio, dapibus id fermentum
                quis, suscipit id erat. Etiam bibendum elit eget erat. Proin in
                tellus sit amet nibh dignissim sagittis. In laoreet, magna id
                viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien
                wisi sed libero. Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Mauris suscipit,
                ligula sit amet pharetra semper, nibh ante cursus purus, vel
                sagittis velit mauris vel metus. Vestibulum erat nulla,
                ullamcorper nec, rutrum non, nonummy ac, erat. Nulla accumsan,
                elit sit amet varius semper, nulla mauris mollis quam, tempor
                suscipit diam nulla vel leo. Integer malesuada. Mauris dolor
                felis, sagittis at, luctus sed, aliquam non, tellus.
              </p>

              <p>
                Phasellus faucibus molestie nisl. Duis ante orci, molestie vitae
                vehicula venenatis, tincidunt ac pede. Nullam sapien sem, ornare
                ac, nonummy non, lobortis a enim. Integer tempor. Donec quis
                nibh at felis congue commodo. Praesent vitae arcu tempor neque
                lacinia pretium. In laoreet, magna id viverra tincidunt, sem
                odio bibendum justo, vel imperdiet sapien wisi sed libero. Nunc
                tincidunt ante vitae massa. Vivamus porttitor turpis ac leo.
                Fusce aliquam vestibulum ipsum.
              </p>

              <p>
                Nulla est. Quisque tincidunt scelerisque libero. Cras elementum.
                Aliquam erat volutpat. Curabitur vitae diam non enim vestibulum
                interdum. Maecenas libero. Quisque porta. Nullam lectus justo,
                vulputate eget mollis sed, tempor sed magna. Aenean placerat.
                Aliquam id dolor. Duis condimentum augue id magna semper rutrum.
              </p>

              <p>
                Aliquam ante. Nunc auctor. Pellentesque arcu. Curabitur bibendum
                justo non orci. Maecenas sollicitudin. Nam quis nulla. Etiam
                ligula pede, sagittis quis, interdum ultricies, scelerisque eu.
                Etiam posuere lacus quis dolor. Maecenas libero. Etiam egestas
                wisi a erat. Vivamus luctus egestas leo. Aliquam erat volutpat.
                Nulla non arcu lacinia neque faucibus fringilla. Sed ac dolor
                sit amet purus malesuada congue. Nunc tincidunt ante vitae
                massa. Mauris tincidunt sem sed arcu.
              </p>

              <p>
                Aenean placerat. Aliquam erat volutpat. Etiam quis quam.
                Suspendisse sagittis ultrices augue. Mauris dictum facilisis
                augue. Maecenas aliquet accumsan leo. Duis sapien nunc, commodo
                et, interdum suscipit, sollicitudin et, dolor. Nullam feugiat,
                turpis at pulvinar vulputate, erat libero tristique tellus, nec
                bibendum odio risus sit amet ante. Nulla non lectus sed nisl
                molestie malesuada. Itaque earum rerum hic tenetur a sapiente
                delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat. Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit. Nunc
                tincidunt ante vitae massa.
              </p>

              <p>
                Cras elementum. Etiam quis quam. Nullam at arcu a est
                sollicitudin euismod. In convallis. Nulla turpis magna, cursus
                sit amet, suscipit a, interdum id, felis. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec vitae arcu. Etiam posuere lacus quis dolor. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos hymenaeos. Praesent in mauris eu tortor porttitor
                accumsan. Duis sapien nunc, commodo et, interdum suscipit,
                sollicitudin et, dolor. Temporibus autem quibusdam et aut
                officiis debitis aut rerum necessitatibus saepe eveniet ut et
                voluptates repudiandae sint et molestiae non recusandae. In sem
                justo, commodo ut, suscipit at, pharetra vitae, orci. Vestibulum
                erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.
              </p>

              <p>
                Proin pede metus, vulputate nec, fermentum fringilla, vehicula
                vitae, justo. Integer in sapien. Etiam egestas wisi a erat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Nullam rhoncus aliquam metus.
                Aliquam erat volutpat. Nulla accumsan, elit sit amet varius
                semper, nulla mauris mollis quam, tempor suscipit diam nulla vel
                leo. Nulla est. Maecenas libero. Donec quis nibh at felis congue
                commodo. Fusce aliquam vestibulum ipsum. Etiam bibendum elit
                eget erat. Curabitur sagittis hendrerit ante. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Integer in sapien. In enim a arcu imperdiet malesuada.
                Integer rutrum, orci vestibulum ullamcorper ultricies, lacus
                quam ultricies odio, vitae placerat pede sem sit amet enim.
                Aenean fermentum risus id tortor.
              </p>

              <p>
                Aenean placerat. Duis condimentum augue id magna semper rutrum.
                Maecenas lorem. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Etiam egestas wisi a
                erat. Donec vitae arcu. Duis ante orci, molestie vitae vehicula
                venenatis, tincidunt ac pede. In rutrum. Morbi imperdiet, mauris
                ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem
                purus in lacus. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos hymenaeos. Duis sapien nunc,
                commodo et, interdum suscipit, sollicitudin et, dolor. Aliquam
                in lorem sit amet leo accumsan lacinia. Nullam eget nisl.
                Maecenas lorem. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Mauris tincidunt sem
                sed arcu.
              </p>

              <p>
                Nullam sit amet magna in magna gravida vehicula. In laoreet,
                magna id viverra tincidunt, sem odio bibendum justo, vel
                imperdiet sapien wisi sed libero. Sed ac dolor sit amet purus
                malesuada congue. Vivamus porttitor turpis ac leo. Maecenas
                lorem. Praesent in mauris eu tortor porttitor accumsan. Nunc
                dapibus tortor vel mi dapibus sollicitudin. Morbi imperdiet,
                mauris ac auctor dictum, nisl ligula egestas nulla, et
                sollicitudin sem purus in lacus. Vestibulum fermentum tortor id
                mi. Duis ante orci, molestie vitae vehicula venenatis, tincidunt
                ac pede.
              </p>

              <p>
                Aliquam ante. Etiam dictum tincidunt diam. Nam quis nulla.
                Integer vulputate sem a nibh rutrum consequat. Nullam justo
                enim, consectetuer nec, ullamcorper ac, vestibulum in, elit.
                Quisque porta. Ut tempus purus at lorem. Duis pulvinar. Etiam
                neque. Fusce consectetuer risus a nunc. Nullam dapibus fermentum
                ipsum. Nullam justo enim, consectetuer nec, ullamcorper ac,
                vestibulum in, elit. Etiam sapien elit, consequat eget,
                tristique non, venenatis quis, ante. Vivamus ac leo pretium
                faucibus. Fusce tellus. Aliquam erat volutpat.
              </p>

              <p>
                Fusce aliquam vestibulum ipsum. Vestibulum fermentum tortor id
                mi. Nullam lectus justo, vulputate eget mollis sed, tempor sed
                magna. Integer malesuada. Aenean vel massa quis mauris vehicula
                lacinia. Integer rutrum, orci vestibulum ullamcorper ultricies,
                lacus quam ultricies odio, vitae placerat pede sem sit amet
                enim. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.
                Aliquam ante. Nullam sit amet magna in magna gravida vehicula.
                Phasellus et lorem id felis nonummy placerat. Sed convallis
                magna eu sem. Fusce tellus. Etiam bibendum elit eget erat.
              </p>

              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras elementum. Etiam ligula pede,
                sagittis quis, interdum ultricies, scelerisque eu. Etiam commodo
                dui eget wisi. Nunc dapibus tortor vel mi dapibus sollicitudin.
                Phasellus et lorem id felis nonummy placerat. Aenean vel massa
                quis mauris vehicula lacinia. Morbi scelerisque luctus velit.
                Etiam neque. Temporibus autem quibusdam et aut officiis debitis
                aut rerum necessitatibus saepe eveniet ut et voluptates
                repudiandae sint et molestiae non recusandae. Duis bibendum,
                lectus ut viverra rhoncus, dolor nunc faucibus libero, eget
                facilisis enim ipsum id lacus. Suspendisse nisl.
              </p>
            </Grid.Column>
          </Grid>
        </Segment>
      </ResponsiveContainerNav>
    );
  }
}

export default InfoPage;
